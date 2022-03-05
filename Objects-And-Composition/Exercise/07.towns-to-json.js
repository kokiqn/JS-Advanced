function townsToJSON(table) {
  let towns = [];

  for (const tableRow of table.splice(1)) {
    let [Town, Latitude, Longitude] = tableRow.split(/\s*\|\s*/).filter(Boolean);

    Longitude = Number(Number(Longitude).toFixed(2));
    Latitude = Number(Number(Latitude).toFixed(2));

    towns.push({
      Town,
      Latitude,
      Longitude
    });
  }

  console.log(JSON.stringify(towns));
}
townsToJSON(
  ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
)
