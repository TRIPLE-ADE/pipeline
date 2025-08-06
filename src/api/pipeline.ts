import { useQuery } from "@tanstack/react-query";
import { pipelineData } from "@/constant/pipelineData";

export const useGetPipelines = () => {
  return useQuery({
    queryFn: () => {
      // Simulate API delay
      return new Promise((resolve) => {
        setTimeout(() => {
          // Combine both datasets for maximum coverage
          const combinedData = [...pipelineData];
          resolve(combinedData);
        }, 500);
      });
    },
    queryKey: ["pipelines"],
    enabled: true, // Always enabled since we're using local data
  });
};
