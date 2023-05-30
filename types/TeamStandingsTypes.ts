export interface TeamData {
  team: {
    logo: string;
    name: string;
  };
  position: number;
  points: number;
}

export interface TeamStandingsProps {
  standings: {
    teamStandingsObj?: {
      response: Record<string, TeamData>;
    };
  };
}
