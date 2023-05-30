export type DriverStandingsProps = {
  standings?: {
    driverStandingsObj?: {
      response?: Record<
        string,
        {
          driver: {
            image: string;
            name: string;
            abbr: string;
            number: number;
          };
          position: number;
          points: number;
          team: {
            logo: string;
            name: string;
          };
        }
      >;
    };
  };
};
