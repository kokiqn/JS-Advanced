function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputValue = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantOutputElement = document.querySelector('#bestRestaurant p');
      let workersOutputElement = document.querySelector('#workers p');
      let restaurantsArray = [];

      inputValue.forEach(el => createRestaurant(el.split(' - ')));
      compareAndAssign(restaurantsArray);

      function createRestaurant(restaurant) {
         let restaurantName = restaurant.shift();
         let employees = restaurant.pop().split(', ');

         let obj = {
            restaurantName,
            employees: [],
            getEmployee(employee) {
               let [name, salary] = employee.split(' ');
               let employeeObj = { name, salary: Number(salary) }
               this.employees.push(employeeObj);
            },
            getBestSalary() {
               return this.employees[0].salary;
            },
            getAvgSalary() {
               let avg = 0;
               this.employees.forEach(e => avg += e.salary);
               return avg / this.employees.length;
            }
         }

         while (employees.length) {
            let employee = employees.shift();
            obj.getEmployee(employee);
         }
         obj.employees.sort((a, b) => b.salary - a.salary);
         restaurantsArray.push(obj);

         for (let i = 0; i < restaurantsArray.length - 1; i++) {
            if (restaurantName === restaurantsArray[i].restaurantName) {
               Object.assign(restaurantsArray[i], obj);
               restaurantsArray.pop();
            }
         }
      };

      function compareAndAssign(restaurants) {
         let best = restaurants[0];
         restaurants.forEach(r => {
            if (r.getAvgSalary() > best.getAvgSalary()) best = r;
         })
         bestRestaurantOutputElement.textContent = `Name: ${best.restaurantName} Average Salary: ${best.getAvgSalary().toFixed(2)} Best Salary: ${best.getBestSalary().toFixed(2)}`;
         best.employees.forEach(e => workersOutputElement.textContent += `Name: ${e.name} With Salary: ${e.salary} `);
      }
   }
}
