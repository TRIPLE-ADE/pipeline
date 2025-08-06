import { PipelineRoute, Status } from "@/types/Map";

// Helper function to generate random date within last 30 days
const getRandomDate = () => {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const randomTime = thirtyDaysAgo.getTime() + Math.random() * (now.getTime() - thirtyDaysAgo.getTime());
  return new Date(randomTime).toISOString();
};

// Additional pipeline data covering more states and regions
export const extendedPipelineData: PipelineRoute<Status>[] = [
  // Additional Lagos State Pipelines
  {
    id: 61,
    name: "Lagos Island Network",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 6.4531, longitude: 3.3958 }
    },
    status: "normal",
    faults: []
  },
  {
    id: 62,
    name: "Lagos Mainland Distribution",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 6.6018, longitude: 3.3515 }
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 6.56, longitude: 3.36 },
        description: "Minor pressure fluctuation",
        reported_at: getRandomDate(),
        status: "warning"
      }
    ]
  },

  // Additional Ogun State Pipelines
  {
    id: 63,
    name: "Abeokuta City Network",
    state: "Ogun",
    coordinates: {
      start: { latitude: 7.1557, longitude: 3.3451 },
      end: { latitude: 7.1600, longitude: 3.3500 }
    },
    status: "normal",
    faults: []
  },

  // Additional Oyo State Pipelines
  {
    id: 64,
    name: "Ibadan Metropolitan Network",
    state: "Oyo",
    coordinates: {
      start: { latitude: 7.3775, longitude: 3.9470 },
      end: { latitude: 7.4000, longitude: 3.9000 }
    },
    status: "normal",
    faults: []
  },

  // Additional Kwara State Pipelines
  {
    id: 65,
    name: "Ilorin Metropolitan Network",
    state: "Kwara",
    coordinates: {
      start: { latitude: 8.5000, longitude: 4.5500 },
      end: { latitude: 8.4800, longitude: 4.5500 }
    },
    status: "normal",
    faults: []
  },

  // Additional Kogi State Pipelines
  {
    id: 66,
    name: "Lokoja Metropolitan Network",
    state: "Kogi",
    coordinates: {
      start: { latitude: 7.8000, longitude: 6.7500 },
      end: { latitude: 7.8200, longitude: 6.7300 }
    },
    status: "normal",
    faults: []
  },

  // Additional FCT Pipelines
  {
    id: 67,
    name: "Abuja Metropolitan Network",
    state: "FCT",
    coordinates: {
      start: { latitude: 9.0820, longitude: 7.3986 },
      end: { latitude: 9.0600, longitude: 7.3950 }
    },
    status: "normal",
    faults: []
  },

  // Additional Niger State Pipelines
  {
    id: 68,
    name: "Minna Metropolitan Network",
    state: "Niger",
    coordinates: {
      start: { latitude: 9.6000, longitude: 6.5500 },
      end: { latitude: 9.6100, longitude: 6.5600 }
    },
    status: "normal",
    faults: []
  },

  // Additional Kaduna State Pipelines
  {
    id: 69,
    name: "Kaduna Metropolitan Network",
    state: "Kaduna",
    coordinates: {
      start: { latitude: 10.5222, longitude: 7.4384 },
      end: { latitude: 10.5200, longitude: 7.4400 }
    },
    status: "normal",
    faults: []
  },

  // Additional Kano State Pipelines
  {
    id: 70,
    name: "Kano Metropolitan Network",
    state: "Kano",
    coordinates: {
      start: { latitude: 11.9914, longitude: 8.5304 },
      end: { latitude: 11.9800, longitude: 8.5400 }
    },
    status: "normal",
    faults: []
  },

  // Additional Rivers State Pipelines
  {
    id: 71,
    name: "Port Harcourt Metropolitan Network",
    state: "Rivers",
    coordinates: {
      start: { latitude: 4.8416, longitude: 7.0041 },
      end: { latitude: 4.8500, longitude: 7.0100 }
    },
    status: "normal",
    faults: []
  },

  // Additional Cross River State Pipelines
  {
    id: 72,
    name: "Calabar Metropolitan Network",
    state: "Cross River",
    coordinates: {
      start: { latitude: 4.9757, longitude: 8.3417 },
      end: { latitude: 4.9800, longitude: 8.3450 }
    },
    status: "normal",
    faults: []
  },

  // Additional Enugu State Pipelines
  {
    id: 73,
    name: "Enugu Metropolitan Network",
    state: "Enugu",
    coordinates: {
      start: { latitude: 6.4584, longitude: 7.5464 },
      end: { latitude: 6.4600, longitude: 7.5480 }
    },
    status: "normal",
    faults: []
  },

  // Additional Borno State Pipelines
  {
    id: 74,
    name: "Maiduguri Metropolitan Network",
    state: "Borno",
    coordinates: {
      start: { latitude: 11.8333, longitude: 13.1500 },
      end: { latitude: 11.8350, longitude: 13.1520 }
    },
    status: "normal",
    faults: []
  },

  // Additional Sokoto State Pipelines
  {
    id: 75,
    name: "Sokoto Metropolitan Network",
    state: "Sokoto",
    coordinates: {
      start: { latitude: 13.0669, longitude: 5.2333 },
      end: { latitude: 13.0680, longitude: 5.2350 }
    },
    status: "normal",
    faults: []
  },

  // Additional Katsina State Pipelines
  {
    id: 76,
    name: "Katsina Metropolitan Network",
    state: "Katsina",
    coordinates: {
      start: { latitude: 12.9908, longitude: 7.6019 },
      end: { latitude: 12.9920, longitude: 7.6030 }
    },
    status: "normal",
    faults: []
  },

  // Additional Zamfara State Pipelines
  {
    id: 77,
    name: "Gusau Metropolitan Network",
    state: "Zamfara",
    coordinates: {
      start: { latitude: 12.0000, longitude: 6.5000 },
      end: { latitude: 12.0020, longitude: 6.5020 }
    },
    status: "normal",
    faults: []
  },

  // Additional Kebbi State Pipelines
  {
    id: 78,
    name: "Birnin Kebbi Metropolitan Network",
    state: "Kebbi",
    coordinates: {
      start: { latitude: 12.4500, longitude: 4.2000 },
      end: { latitude: 12.4520, longitude: 4.2020 }
    },
    status: "normal",
    faults: []
  },

  // Additional Jigawa State Pipelines
  {
    id: 79,
    name: "Dutse Metropolitan Network",
    state: "Jigawa",
    coordinates: {
      start: { latitude: 12.0000, longitude: 9.3500 },
      end: { latitude: 12.0020, longitude: 9.3520 }
    },
    status: "normal",
    faults: []
  },

  // Additional Yobe State Pipelines
  {
    id: 80,
    name: "Damaturu Metropolitan Network",
    state: "Yobe",
    coordinates: {
      start: { latitude: 11.7500, longitude: 11.9667 },
      end: { latitude: 11.7520, longitude: 11.9680 }
    },
    status: "normal",
    faults: []
  },

  // Additional Adamawa State Pipelines
  {
    id: 81,
    name: "Yola Metropolitan Network",
    state: "Adamawa",
    coordinates: {
      start: { latitude: 9.3265, longitude: 12.3984 },
      end: { latitude: 9.3280, longitude: 12.4000 }
    },
    status: "normal",
    faults: []
  },

  // Additional Taraba State Pipelines
  {
    id: 82,
    name: "Jalingo Metropolitan Network",
    state: "Taraba",
    coordinates: {
      start: { latitude: 7.8700, longitude: 10.2700 },
      end: { latitude: 7.8720, longitude: 10.2720 }
    },
    status: "normal",
    faults: []
  },

  // Additional Benue State Pipelines
  {
    id: 83,
    name: "Makurdi Metropolitan Network",
    state: "Benue",
    coordinates: {
      start: { latitude: 7.1900, longitude: 8.1300 },
      end: { latitude: 7.1920, longitude: 8.1320 }
    },
    status: "normal",
    faults: []
  },

  // Additional Nasarawa State Pipelines
  {
    id: 84,
    name: "Lafia Metropolitan Network",
    state: "Nasarawa",
    coordinates: {
      start: { latitude: 8.5000, longitude: 8.2000 },
      end: { latitude: 8.5020, longitude: 8.2020 }
    },
    status: "normal",
    faults: []
  },

  // Additional Plateau State Pipelines
  {
    id: 85,
    name: "Jos Metropolitan Network",
    state: "Plateau",
    coordinates: {
      start: { latitude: 9.8965, longitude: 8.8583 },
      end: { latitude: 9.8980, longitude: 8.8600 }
    },
    status: "normal",
    faults: []
  },

  // Additional Bauchi State Pipelines
  {
    id: 86,
    name: "Bauchi Metropolitan Network",
    state: "Bauchi",
    coordinates: {
      start: { latitude: 10.3158, longitude: 9.8442 },
      end: { latitude: 10.3180, longitude: 9.8460 }
    },
    status: "normal",
    faults: []
  },

  // Additional Gombe State Pipelines
  {
    id: 87,
    name: "Gombe Metropolitan Network",
    state: "Gombe",
    coordinates: {
      start: { latitude: 10.2894, longitude: 11.1677 },
      end: { latitude: 10.2910, longitude: 11.1690 }
    },
    status: "normal",
    faults: []
  },

  // Additional Akwa Ibom State Pipelines
  {
    id: 88,
    name: "Uyo Metropolitan Network",
    state: "Akwa Ibom",
    coordinates: {
      start: { latitude: 4.9500, longitude: 7.8500 },
      end: { latitude: 4.9520, longitude: 7.8520 }
    },
    status: "normal",
    faults: []
  },

  // Additional Bayelsa State Pipelines
  {
    id: 89,
    name: "Yenagoa Metropolitan Network",
    state: "Bayelsa",
    coordinates: {
      start: { latitude: 4.9250, longitude: 6.2677 },
      end: { latitude: 4.9270, longitude: 6.2690 }
    },
    status: "normal",
    faults: []
  },

  // Additional Delta State Pipelines
  {
    id: 90,
    name: "Asaba Metropolitan Network",
    state: "Delta",
    coordinates: {
      start: { latitude: 5.5000, longitude: 5.7000 },
      end: { latitude: 5.5020, longitude: 5.7020 }
    },
    status: "normal",
    faults: []
  },

  // Additional Edo State Pipelines
  {
    id: 91,
    name: "Benin City Metropolitan Network",
    state: "Edo",
    coordinates: {
      start: { latitude: 6.3176, longitude: 5.6145 },
      end: { latitude: 6.3190, longitude: 5.6160 }
    },
    status: "normal",
    faults: []
  },

  // Additional Ondo State Pipelines
  {
    id: 92,
    name: "Akure Metropolitan Network",
    state: "Ondo",
    coordinates: {
      start: { latitude: 6.5000, longitude: 5.2000 },
      end: { latitude: 6.5020, longitude: 5.2020 }
    },
    status: "normal",
    faults: []
  },

  // Additional Ekiti State Pipelines
  {
    id: 93,
    name: "Ado-Ekiti Metropolitan Network",
    state: "Ekiti",
    coordinates: {
      start: { latitude: 7.6333, longitude: 5.2167 },
      end: { latitude: 7.6350, longitude: 5.2180 }
    },
    status: "normal",
    faults: []
  },

  // Additional Osun State Pipelines
  {
    id: 94,
    name: "Osogbo Metropolitan Network",
    state: "Osun",
    coordinates: {
      start: { latitude: 7.7500, longitude: 4.5500 },
      end: { latitude: 7.7520, longitude: 4.5520 }
    },
    status: "normal",
    faults: []
  },

  // Additional Anambra State Pipelines
  {
    id: 95,
    name: "Awka Metropolitan Network",
    state: "Anambra",
    coordinates: {
      start: { latitude: 6.2100, longitude: 7.0700 },
      end: { latitude: 6.2120, longitude: 7.0720 }
    },
    status: "normal",
    faults: []
  },

  // Additional Imo State Pipelines
  {
    id: 96,
    name: "Owerri Metropolitan Network",
    state: "Imo",
    coordinates: {
      start: { latitude: 5.4833, longitude: 7.0333 },
      end: { latitude: 5.4850, longitude: 7.0350 }
    },
    status: "normal",
    faults: []
  },

  // Additional Abia State Pipelines
  {
    id: 97,
    name: "Umuahia Metropolitan Network",
    state: "Abia",
    coordinates: {
      start: { latitude: 5.4500, longitude: 7.5000 },
      end: { latitude: 5.4520, longitude: 7.5020 }
    },
    status: "normal",
    faults: []
  },

  // Additional Ebonyi State Pipelines
  {
    id: 98,
    name: "Abakaliki Metropolitan Network",
    state: "Ebonyi",
    coordinates: {
      start: { latitude: 6.3167, longitude: 8.1000 },
      end: { latitude: 6.3180, longitude: 8.1020 }
    },
    status: "normal",
    faults: []
  },

  // Cross-country major pipelines
  {
    id: 99,
    name: "Lagos to Kano Express",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 11.9914, longitude: 8.5304 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 100,
    name: "Port Harcourt to Kano Express",
    state: "Rivers",
    coordinates: {
      start: { latitude: 4.8416, longitude: 7.0041 },
      end: { latitude: 11.9914, longitude: 8.5304 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 101,
    name: "Calabar to Sokoto Express",
    state: "Cross River",
    coordinates: {
      start: { latitude: 4.9757, longitude: 8.3417 },
      end: { latitude: 13.0669, longitude: 5.2333 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 102,
    name: "Maiduguri to Lagos Express",
    state: "Borno",
    coordinates: {
      start: { latitude: 11.8333, longitude: 13.1500 },
      end: { latitude: 6.5244, longitude: 3.3792 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 103,
    name: "Sokoto to Port Harcourt Express",
    state: "Sokoto",
    coordinates: {
      start: { latitude: 13.0669, longitude: 5.2333 },
      end: { latitude: 4.8416, longitude: 7.0041 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 104,
    name: "Kano to Calabar Express",
    state: "Kano",
    coordinates: {
      start: { latitude: 11.9914, longitude: 8.5304 },
      end: { latitude: 4.9757, longitude: 8.3417 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 105,
    name: "Abuja to Maiduguri Express",
    state: "FCT",
    coordinates: {
      start: { latitude: 9.0820, longitude: 7.3986 },
      end: { latitude: 11.8333, longitude: 13.1500 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 106,
    name: "Enugu to Sokoto Express",
    state: "Enugu",
    coordinates: {
      start: { latitude: 6.4584, longitude: 7.5464 },
      end: { latitude: 13.0669, longitude: 5.2333 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 107,
    name: "Lagos to Maiduguri Express",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 11.8333, longitude: 13.1500 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 108,
    name: "Port Harcourt to Sokoto Express",
    state: "Rivers",
    coordinates: {
      start: { latitude: 4.8416, longitude: 7.0041 },
      end: { latitude: 13.0669, longitude: 5.2333 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 109,
    name: "Calabar to Lagos Express",
    state: "Cross River",
    coordinates: {
      start: { latitude: 4.9757, longitude: 8.3417 },
      end: { latitude: 6.5244, longitude: 3.3792 }
    },
    status: "normal",
    faults: []
  },

  {
    id: 110,
    name: "Kano to Port Harcourt Express",
    state: "Kano",
    coordinates: {
      start: { latitude: 11.9914, longitude: 8.5304 },
      end: { latitude: 4.8416, longitude: 7.0041 }
    },
    status: "normal",
    faults: []
  }
]; 