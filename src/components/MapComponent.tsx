import React, { useState, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  CircleMarker,
  Popup,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import DetailsPane from "./DetailsPane";
import { PipelineRoute, Status, Fault } from "@/types/Map";
import { debounce } from "lodash";
import { Button } from "./ui/button";
import StatusDropdown from "./StatusDropdown";
import Legend from "./Legend";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetPipelines } from "@/api/pipeline";
import { SkeletonLoader } from "./ui";

const getColorForStatus = (status: Status): string => {
  switch (status) {
    case "normal":
      return "green";
    case "warning":
      return "yellow";
    case "critical":
      return "red";
    default:
      return "gray";
  }
};

const createBlinkingIcon = () => {
  return L.divIcon({
    className: "blinking-icon",
    html: '<div class="blinking-marker"></div>',
  });
};

const MapZoomToLocation: React.FC<{
  position: [number, number];
  zoomLevel: number;
}> = ({ position, zoomLevel }) => {
  const map = useMap();
  map.setView(position, zoomLevel, { animate: true });
  map.invalidateSize();
  return null;
};

const MapComponent: React.FC = () => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([9.082, 8.6753]);
  const [mapZoom, setMapZoom] = useState<number>(6);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [faultLocation, setFaultLocation] = useState<[number, number] | null>(
    null,
  );
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");
  const [showFaults, setShowFaults] = useState<boolean>(true);
  const { data, isLoading, isError } = useGetPipelines();

  const debouncedHandleMarkerClick = debounce(
    (latitude: number, longitude: number, stateName: string) => {
      setMapCenter([latitude, longitude]);
      setMapZoom(8);
      setSelectedState(stateName);
    },
    300,
  );

  const handleFaultClick = (latitude: number, longitude: number) => {
    setFaultLocation([latitude, longitude]);
    setMapCenter([latitude, longitude]);
    setMapZoom(8);
  };

  const memoizedRoutes = useMemo(() => {
    if (!data) return [];

    const pipelineData = Array.isArray(data) ? data : [];
    return pipelineData.filter((route: PipelineRoute<Status>) => {
      if (filterStatus !== "All" && route.status !== filterStatus) return false;
      return true;
    });
  }, [filterStatus, data]);

  
  return (
    <div className="flex flex-col min-h-dvh">
      {/* Tabs for Data Layer */}
      <Tabs defaultValue="current" className="mb-4">
        <div className="flex flex-wrap items-center justify-between p-4 mb-4 shadow-md">
          <TabsList>
            <TabsTrigger value="current">Current Data</TabsTrigger>
            <TabsTrigger value="historical">Historical Data</TabsTrigger>
          </TabsList>
          {/* Filter Controls Row */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setShowFaults((prev) => !prev)}
              variant={showFaults ? "secondary" : "outline"}
              className={`px-4 py-2 rounded ${showFaults ? "text-white" : ""}`}
            >
              {showFaults ? "Hide Faults" : "Show Faults"}
            </Button>
            <StatusDropdown
              filterStatus={filterStatus}
              onStatusChange={setFilterStatus}
            />
          </div>
        </div>
        {isLoading && <SkeletonLoader />}
        {isError && <div>Error fetching data</div>}
        {!isLoading && !isError && (!data || !Array.isArray(data) || data.length < 1) && (
          <div>No Pipeline route Found</div>
        )}
        {!isLoading && !isError && data && Array.isArray(data) && data.length > 0 ? (
          <>
            <TabsContent value="current">
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                className="w-full h-96"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {memoizedRoutes.map((route: PipelineRoute<Status>) => {
                  const latLngs: [number, number][] = [
                    [
                      route.coordinates.start.latitude,
                      route.coordinates.start.longitude,
                    ],
                    [
                      route.coordinates.end.latitude,
                      route.coordinates.end.longitude,
                    ],
                  ];

                  const pipeColor = getColorForStatus(route.status);

                  return (
                    <React.Fragment key={route.id}>
                      <Polyline
                        positions={latLngs}
                        pathOptions={{ color: pipeColor, weight: 5 }}
                        eventHandlers={{
                          click: () =>
                            debouncedHandleMarkerClick(
                              route.coordinates.start.latitude,
                              route.coordinates.start.longitude,
                              route.name,
                            ),
                        }}
                      >
                        <Popup>{route.name}</Popup>
                      </Polyline>
                      {latLngs.map((latLng, index) => (
                        <CircleMarker
                          key={index}
                          center={latLng}
                          radius={8}
                          color="blue"
                          fillColor="blue"
                          fillOpacity={0.6}
                          eventHandlers={{
                            click: () =>
                              debouncedHandleMarkerClick(
                                latLng[0],
                                latLng[1],
                                route.name,
                              ),
                          }}
                        >
                          <Popup>
                            <div>
                              <strong>{route.name}</strong>
                              <br />
                              Latitude: {latLng[0].toFixed(6)}
                              <br />
                              Longitude: {latLng[1].toFixed(6)}
                              <br />
                              State: {route.state}
                              <br />
                              Status: {route.status}
                              <br />
                              {route.status !== "normal" &&
                                route.faults.length > 0 && (
                                  <>
                                    <strong>Faults:</strong>
                                    <br />
                                    {route.faults.map((fault: Fault, faultIndex: number) => (
                                      <div key={faultIndex}>
                                        {fault.description}
                                        <br />
                                        Latitude:{" "}
                                        {fault.fault_coordinates.latitude.toFixed(
                                          6,
                                        )}
                                        <br />
                                        Longitude:{" "}
                                        {fault.fault_coordinates.longitude.toFixed(
                                          6,
                                        )}
                                        <br />
                                        <small>
                                          {new Date(
                                            fault.reported_at,
                                          ).toLocaleString()}
                                        </small>
                                      </div>
                                    ))}
                                  </>
                                )}
                            </div>
                          </Popup>
                        </CircleMarker>
                      ))}

                      {showFaults &&
                        route.status !== "normal" &&
                        route.faults.map((fault: Fault, index: number) => (
                          <Marker
                            key={index}
                            position={[
                              fault.fault_coordinates.latitude,
                              fault.fault_coordinates.longitude,
                            ]}
                            icon={createBlinkingIcon()}
                            eventHandlers={{
                              click: () =>
                                handleFaultClick(
                                  fault.fault_coordinates.latitude,
                                  fault.fault_coordinates.longitude,
                                ),
                            }}
                          >
                            <Popup>
                              <div>
                                <strong>Fault Detected</strong>
                                <br />
                                Description: {fault.description}
                                <br />
                                Latitude:{" "}
                                {fault.fault_coordinates.latitude.toFixed(6)}
                                <br />
                                Longitude:{" "}
                                {fault.fault_coordinates.longitude.toFixed(6)}
                                <br />
                                Reported at:{" "}
                                {new Date(fault.reported_at).toLocaleString()}
                                <br />
                                Status: {fault.status}
                              </div>
                            </Popup>
                          </Marker>
                        ))}
                    </React.Fragment>
                  );
                })}
                {faultLocation && (
                  <MapZoomToLocation position={faultLocation} zoomLevel={12} />
                )}
              </MapContainer>
              {selectedState && (
                <DetailsPane
                  selectedState={selectedState}
                  onFilterStatusChange={setFilterStatus}
                  onFaultClick={handleFaultClick}
                  faults={memoizedRoutes.flatMap((route) => route.faults)}
                />
              )}
            </TabsContent>
            <TabsContent value="historical">
              {/* Render Historical Data Content */}
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                className="w-full h-96"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {memoizedRoutes.map((route: PipelineRoute<Status>) => {
                  const latLngs: [number, number][] = [
                    [
                      route.coordinates.start.latitude,
                      route.coordinates.start.longitude,
                    ],
                    [
                      route.coordinates.end.latitude,
                      route.coordinates.end.longitude,
                    ],
                  ];

                  return (
                    <Polyline
                      key={route.id}
                      positions={latLngs}
                      pathOptions={{
                        color: "gray",
                        weight: 5,
                        dashArray: "10, 10",
                      }} // Historical data style
                      eventHandlers={{
                        click: () =>
                          debouncedHandleMarkerClick(
                            route.coordinates.start.latitude,
                            route.coordinates.start.longitude,
                            route.name,
                          ),
                      }}
                    >
                      <Popup>{route.name} (Historical)</Popup>
                      {latLngs.map((latLng, index) => (
                        <CircleMarker
                          key={index}
                          center={latLng}
                          radius={8}
                          color="blue"
                          fillColor="blue"
                          fillOpacity={0.6}
                          eventHandlers={{
                            click: () =>
                              debouncedHandleMarkerClick(
                                latLng[0],
                                latLng[1],
                                route.name,
                              ),
                          }}
                        >
                          <Popup>
                            <div>
                              <strong>{route.name}</strong>
                              <br />
                              Latitude: {latLng[0].toFixed(6)}
                              <br />
                              Longitude: {latLng[1].toFixed(6)}
                              <br />
                              State: {route.state}
                              <br />
                              Status: {route.status}
                              <br />
                              {route.status !== "normal" &&
                                route.faults.length > 0 && (
                                  <>
                                    <strong>Faults:</strong>
                                    <br />
                                    {route.faults.map((fault: Fault, faultIndex: number) => (
                                      <div key={faultIndex}>
                                        {fault.description}
                                        <br />
                                        Latitude:{" "}
                                        {fault.fault_coordinates.latitude.toFixed(
                                          6,
                                        )}
                                        <br />
                                        Longitude:{" "}
                                        {fault.fault_coordinates.longitude.toFixed(
                                          6,
                                        )}
                                        <br />
                                        <small>
                                          {new Date(
                                            fault.reported_at,
                                          ).toLocaleString()}
                                        </small>
                                      </div>
                                    ))}
                                  </>
                                )}
                            </div>
                          </Popup>
                        </CircleMarker>
                      ))}
                    </Polyline>
                  );
                })}
                {faultLocation && (
                  <MapZoomToLocation position={faultLocation} zoomLevel={12} />
                )}
              </MapContainer>
            </TabsContent>
            <Legend />
          </>
        ) : null}
      </Tabs>
    </div>
  );
};

export default MapComponent;
