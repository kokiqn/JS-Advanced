function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);

    function filterByCriteria() {
        if (criteria == 'all') return employees;
        let [cKey, cValue] = criteria.split('-');
        return employees.filter(emp => emp[cKey] == cValue);
    }

    let filteredEmployees = filterByCriteria();
    filteredEmployees.forEach((emp, i) => console.log(`${i}. ${emp.first_name} ${emp.last_name} - ${emp.email}`));
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
);
