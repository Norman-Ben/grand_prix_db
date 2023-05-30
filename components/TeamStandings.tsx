import { TeamStandingsProps } from '@/types/TeamStandingsTypes';

export default function TeamStandings({ standings }: TeamStandingsProps) {
  return (
    <div className="container mx-auto my-6 flex justify-around">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Team</th>
              <th>Position</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through Standings object and add a table row for each */}
            {standings?.teamStandingsObj?.response ? (
              Object.keys(standings.teamStandingsObj.response).map((key) => {
                const teamData = standings.teamStandingsObj?.response[key];
                return (
                  <tr key={key}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar w-16">
                          <img
                            src={teamData?.team.logo}
                            alt={`${teamData?.team.name} Logo`}
                            className="bg-gray-200 rounded-md"
                          />
                        </div>
                        <div>
                          <div className="font-bold">{teamData?.team.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{teamData?.position}</td>
                    <td>{teamData?.points || 0}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <button className="btn btn-square loading"></button>
              </tr>
            )}
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th>Team</th>
              <th>Position</th>
              <th>Points</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
