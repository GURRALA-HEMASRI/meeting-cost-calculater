export const exportCSV = (
  data
) => {

  if (
    !data.length
  ) {
    return;
  }

  const headers =
    Object.keys(
      data[0]
    );

  const csvRows = [];

  csvRows.push(
    headers.join(",")
  );

  data.forEach(
    (row) => {

      const values =
        headers.map(
          (header) =>
            row[
              header
            ]
        );

      csvRows.push(
        values.join(",")
      );

    }
  );

  const csvString =
    csvRows.join(
      "\n"
    );

  const blob =
    new Blob(
      [csvString],
      {
        type:
          "text/csv"
      }
    );

  const url =
    URL.createObjectURL(
      blob
    );

  const link =
    document.createElement(
      "a"
    );

  link.href = url;

  link.download =
    "meeting-history.csv";

  link.click();
};