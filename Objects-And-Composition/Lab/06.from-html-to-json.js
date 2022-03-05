function fromJSONtoHTMLTable(input) {
  let parsedInput = JSON.parse(input);
  let table = ["<table>"];
  table.push(makeKeyRow(parsedInput[0]));
  parsedInput.forEach(obj => table.push(makeValueRow(obj)));
  table.push("</table>")

  function makeKeyRow(arr) {
    let headers = [];
    Object.keys(arr).forEach(key => {
      headers.push(`<th>${escapeHTML(key)}</th>`)
    })
    return ("<tr>" + headers.join('') + "</tr>");
  }

  function makeValueRow(obj) {
    let rows = [];
    Object.values(obj).forEach(value => {
      rows.push(`<td>${escapeHTML(value)}</td>`)
    });
    return ("<tr>" + rows.join('') + "</tr>");
  }

  function escapeHTML(value) {
    return value
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  return table.join('\n');
}

console.log(
  fromJSONtoHTMLTable(`[{"Name":"Pesho",
  "Score":4,
  " Grade":8},
 {"Name":"Gosho",
  "Score":5,
  " Grade":8},
 {"Name":"Angel",
  "Score":5.50,
  " Grade":10}]`

  ));
