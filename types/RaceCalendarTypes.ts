export type RaceCalendarProps = {
  calendar: {
    calendarObj?: {
      response: Array<{
        circuit: { image: string; name: string };
        competition: { name: string };
        laps: { total: number };
        distance: string;
        date: string;
        id: string;
      }>;
    };
  };
};
