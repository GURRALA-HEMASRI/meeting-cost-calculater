function HistoryTable({
  meetings
}) {

  return (

    <div

      style={{

        background:
          "#0f172a",

        border:
          "1px solid #1e293b",

        borderRadius:
          "20px",

        overflow:
          "hidden"

      }}

    >

      <table

        style={{

          width:
            "100%",

          borderCollapse:
            "collapse"

        }}

      >

        <thead>

          <tr>

            <th
              style={{
                padding:
                  "15px"
              }}
            >
              Title
            </th>

            <th>
              Date
            </th>

            <th>
              Participants
            </th>

            <th>
              Cost
            </th>

          </tr>

        </thead>

        <tbody>

          {

            meetings.map(
              (
                meeting,
                index
              ) => (

                <tr

                  key={
                    index
                  }

                  style={{

                    textAlign:
                      "center",

                    borderTop:
                      "1px solid #1e293b"

                  }}

                >

                  <td
                    style={{
                      padding:
                        "15px"
                    }}
                  >

                    {
                      meeting.title
                    }

                  </td>

                  <td>

                    {
                      meeting.date
                    }

                  </td>

                  <td>

                    {
                      meeting.participants
                    }

                  </td>

                  <td>

                    ₹
                    {
                      meeting.cost
                    }

                  </td>

                </tr>

              )
            )

          }

        </tbody>

      </table>

    </div>

  );

}

export default HistoryTable;