interface TeamStandingsProps {
  standings: any;
}

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
            {standings?.teamStandingsObj?.data ? (
              Object.keys(standings.teamStandingsObj.data.response).map(
                (key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar w-16">
                            <img
                              src={
                                standings.teamStandingsObj.data.response[key]
                                  .team.logo
                              }
                              alt="Avatar Tailwind CSS Component"
                              className="bg-gray-200 rounded-md"
                            />
                          </div>
                          <div>
                            <div className="font-bold">
                              {
                                standings.teamStandingsObj.data.response[key]
                                  .team.name
                              }
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {standings.teamStandingsObj.data.response[key].position}
                        <br />
                      </td>
                      <td>
                        {standings.teamStandingsObj.data.response[key].points ||
                          0}
                      </td>
                    </tr>
                  );
                }
              )
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
