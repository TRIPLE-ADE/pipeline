import { PipelineRoute, Status } from "@/types/Map";

// Helper function to generate random date within last 30 days
const getRandomDate = () => {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const randomTime = thirtyDaysAgo.getTime() + Math.random() * (now.getTime() - thirtyDaysAgo.getTime());
  return new Date(randomTime).toISOString();
};


export const pipelineData: PipelineRoute<Status>[] = [
  // Lagos State Pipelines
  {
    id: 1,
    name: "Lagos to Ogun Pipeline",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 6.8996, longitude: 3.2584 }
    },
    status: "normal",
    faults: []
  },
  {
    id: 2,
    name: "Lagos Main Distribution",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 6.4654, longitude: 3.4064 }
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 6.52, longitude: 3.39 },
        description: "Minor leakage detected",
        reported_at: "2024-08-17T17:09:54.098533Z",
        status: "warning"
      },
      {
        fault_coordinates: { latitude: 6.47, longitude: 3.4 },
        description: "Pressure drop observed",
        reported_at: "2024-08-17T17:09:54.109949Z",
        status: "critical"
      }
    ]
  },
  {
    id: 3,
    name: "Lagos Port Terminal",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 6.4351, longitude: 3.4480 }
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 6.48, longitude: 3.42 },
        description: "Corrosion detected",
        reported_at: getRandomDate(),
        status: "warning"
      }
    ]
  },


  // Borno State Pipelines
  {
    id: 22,
    name: "Borno to Adamawa Pipeline",
    state: "Borno",
    coordinates: {
      start: { latitude: 11.8333, longitude: 13.1500 },
      end: { latitude: 9.3265, longitude: 12.3984 }
    },
    status: "normal",
    faults: []
  },

  // Adamawa State Pipelines
  {
    id: 23,
    name: "Adamawa to Taraba Pipeline",
    state: "Adamawa",
    coordinates: {
      start: { latitude: 9.3265, longitude: 12.3984 },
      end: { latitude: 7.8700, longitude: 10.2700 }
    },
    status: "normal",
    faults: []
  },

  // Taraba State Pipelines
  {
    id: 24,
    name: "Taraba to Benue Pipeline",
    state: "Taraba",
    coordinates: {
      start: { latitude: 7.8700, longitude: 10.2700 },
      end: { latitude: 7.1900, longitude: 8.1300 }
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 7.53, longitude: 9.20 },
        description: "Coating damage detected",
        reported_at: getRandomDate(),
        status: "warning"
      }
    ]
  },

  // Benue State Pipelines
  {
    id: 25,
    name: "Benue to Nasarawa Pipeline",
    state: "Benue",
    coordinates: {
      start: { latitude: 7.1900, longitude: 8.1300 },
      end: { latitude: 8.5000, longitude: 8.2000 }
    },
    status: "normal",
    faults: []
  },

  // Nasarawa State Pipelines
  {
    id: 26,
    name: "Nasarawa to Plateau Pipeline",
    state: "Nasarawa",
    coordinates: {
      start: { latitude: 8.5000, longitude: 8.2000 },
      end: { latitude: 9.8965, longitude: 8.8583 }
    },
    status: "normal",
    faults: []
  },

  // Plateau State Pipelines
  {
    id: 27,
    name: "Plateau to Bauchi Pipeline",
    state: "Plateau",
    coordinates: {
      start: { latitude: 9.8965, longitude: 8.8583 },
      end: { latitude: 10.3158, longitude: 9.8442 }
    },
    status: "normal",
    faults: []
  },

  // Bauchi State Pipelines
  {
    id: 28,
    name: "Bauchi to Gombe Pipeline",
    state: "Bauchi",
    coordinates: {
      start: { latitude: 10.3158, longitude: 9.8442 },
      end: { latitude: 10.2894, longitude: 11.1677 }
    },
    status: "normal",
    faults: []
  },

  // Gombe State Pipelines
  {
    id: 29,
    name: "Gombe to Yobe Pipeline",
    state: "Gombe",
    coordinates: {
      start: { latitude: 10.2894, longitude: 11.1677 },
      end: { latitude: 11.7500, longitude: 11.9667 }
    },
    status: "normal",
    faults: []
  },

  // Cross River State Pipelines
  {
    id: 30,
    name: "Cross River to Akwa Ibom Pipeline",
    state: "Cross River",
    coordinates: {
      start: { latitude: 4.9757, longitude: 8.3417 },
      end: { latitude: 4.9500, longitude: 7.8500 }
    },
    status: "normal",
    faults: []
  },

  // Akwa Ibom State Pipelines
  {
    id: 31,
    name: "Akwa Ibom to Rivers Pipeline",
    state: "Akwa Ibom",
    coordinates: {
      start: { latitude: 4.9500, longitude: 7.8500 },
      end: { latitude: 4.8416, longitude: 7.0041 }
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 4.89, longitude: 7.42 },
        description: "Major leakage detected",
        reported_at: getRandomDate(),
        status: "critical"
      }
    ]
  },

  // Rivers State Pipelines
  {
    id: 32,
    name: "Rivers to Bayelsa Pipeline",
    state: "Rivers",
    coordinates: {
      start: { latitude: 4.8416, longitude: 7.0041 },
      end: { latitude: 4.9250, longitude: 6.2677 }
    },
    status: "normal",
    faults: []
  },

  // Bayelsa State Pipelines
  {
    id: 33,
    name: "Bayelsa to Delta Pipeline",
    state: "Bayelsa",
    coordinates: {
      start: { latitude: 4.9250, longitude: 6.2677 },
      end: { latitude: 5.5000, longitude: 5.7000 }
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 5.21, longitude: 5.98 },
        description: "Pressure surge detected",
        reported_at: getRandomDate(),
        status: "warning"
      }
    ]
  },

  // Delta State Pipelines
  {
    id: 34,
    name: "Delta to Edo Pipeline",
    state: "Delta",
    coordinates: {
      start: { latitude: 5.5000, longitude: 5.7000 },
      end: { latitude: 6.3176, longitude: 5.6145 }
    },
    status: "normal",
    faults: []
  },

  // Edo State Pipelines
  {
    id: 35,
    name: "Edo to Ondo Pipeline",
    state: "Edo",
    coordinates: {
      start: { latitude: 6.3176, longitude: 5.6145 },
      end: { latitude: 6.5000, longitude: 5.2000 }
    },
    status: "normal",
    faults: []
  },

  // Ondo State Pipelines
  {
    id: 36,
    name: "Ondo to Ekiti Pipeline",
    state: "Ondo",
    coordinates: {
      start: { latitude: 6.5000, longitude: 5.2000 },
      end: { latitude: 7.6333, longitude: 5.2167 }
    },
    status: "normal",
    faults: []
  },

  // Ekiti State Pipelines
  {
    id: 37,
    name: "Ekiti to Osun Pipeline",
    state: "Ekiti",
    coordinates: {
      start: { latitude: 7.6333, longitude: 5.2167 },
      end: { latitude: 7.7500, longitude: 4.5500 }
    },
    status: "normal",
    faults: []
  },

  // Osun State Pipelines
  {
    id: 38,
    name: "Osun to Oyo Pipeline",
    state: "Osun",
    coordinates: {
      start: { latitude: 7.7500, longitude: 4.5500 },
      end: { latitude: 7.3775, longitude: 3.9470 }
    },
    status: "normal",
    faults: []
  },

  // Enugu State Pipelines
  {
    id: 39,
    name: "Enugu to Anambra Pipeline",
    state: "Enugu",
    coordinates: {
      start: { latitude: 6.4584, longitude: 7.5464 },
      end: { latitude: 6.2100, longitude: 7.0700 }
    },
    status: "normal",
    faults: []
  },

  // Anambra State Pipelines
  {
    id: 40,
    name: "Anambra to Imo Pipeline",
    state: "Anambra",
    coordinates: {
      start: { latitude: 6.2100, longitude: 7.0700 },
      end: { latitude: 5.4833, longitude: 7.0333 }
    },
    status: "normal",
    faults: []
  },

  // Imo State Pipelines
  {
    id: 41,
    name: "Imo to Abia Pipeline",
    state: "Imo",
    coordinates: {
      start: { latitude: 5.4833, longitude: 7.0333 },
      end: { latitude: 5.4500, longitude: 7.5000 }
    },
    status: "normal",
    faults: []
  },




  // Port Harcourt to Enugu Pipeline
  {
    id: 51,
    name: "Port Harcourt to Enugu",
    state: "Rivers",
    coordinates: {
      start: { latitude: 4.8416, longitude: 7.0041 },
      end: { latitude: 6.4584, longitude: 7.5464 }
    },
    status: "critical",
    faults: [
      {
        fault_coordinates: { latitude: 5.65, longitude: 7.27 },
        description: "Major pipeline rupture",
        reported_at: getRandomDate(),
        status: "critical"
      },
      {
        fault_coordinates: { latitude: 6.05, longitude: 7.40 },
        description: "Pressure drop observed",
        reported_at: getRandomDate(),
        status: "warning"
      }
    ]
  },

  // Lagos to Port Harcourt Pipeline
  {
    id: 52,
    name: "Lagos to Port Harcourt",
    state: "Lagos",
    coordinates: {
      start: { latitude: 6.5244, longitude: 3.3792 },
      end: { latitude: 4.8416, longitude: 7.0041 }
    },
    status: "normal",
    faults: []
  },

  // Kano to Maiduguri Pipeline
  {
    id: 53,
    name: "Kano to Maiduguri",
    state: "Kano",
    coordinates: {
      start: { latitude: 11.9914, longitude: 8.5304 },
      end: { latitude: 11.8333, longitude: 13.1500 }
    },
    status: "warning",
    faults: [
      {
        fault_coordinates: { latitude: 11.91, longitude: 10.84 },
        description: "Cathodic protection issue",
        reported_at: getRandomDate(),
        status: "warning"
      }
    ]
  },

  // Calabar to Enugu Pipeline
  {
    id: 54,
    name: "Calabar to Enugu",
    state: "Cross River",
    coordinates: {
      start: { latitude: 4.9757, longitude: 8.3417 },
      end: { latitude: 6.4584, longitude: 7.5464 }
    },
    status: "normal",
    faults: []
  },

  // Sokoto to Kano Pipeline
  {
    id: 55,
    name: "Sokoto to Kano",
    state: "Sokoto",
    coordinates: {
      start: { latitude: 13.0669, longitude: 5.2333 },
      end: { latitude: 11.9914, longitude: 8.5304 }
    },
    status: "normal",
    faults: []
  },

  // Port Harcourt to Abuja Pipeline
  {
    id: 57,
    name: "Port Harcourt to Abuja",
    state: "Rivers",
    coordinates: {
      start: { latitude: 4.8416, longitude: 7.0041 },
      end: { latitude: 9.0820, longitude: 7.3986 }
    },
    status: "normal",
    faults: []
  },

  // Kano to Lagos Pipeline
  {
    id: 58,
    name: "Kano to Lagos",
    state: "Kano",
    coordinates: {
      start: { latitude: 11.9914, longitude: 8.5304 },
      end: { latitude: 6.5244, longitude: 3.3792 }
    },
    status: "normal",
    faults: []
  },

  // Calabar to Lagos Pipeline
  {
    id: 60,
    name: "Calabar to Lagos",
    state: "Cross River",
    coordinates: {
      start: { latitude: 4.9757, longitude: 8.3417 },
      end: { latitude: 6.5244, longitude: 3.3792 }
    },
    status: "normal",
    faults: []
  }
]; 