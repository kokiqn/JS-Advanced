function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputValue = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      let workersOutputElement = document.querySelector('#workers p');
      let restaurants = [];

      inputValue.forEach(rest => createRestaurant(rest.split(' - ')));
      compareAndAssign(restaurants);

      function createRestaurant(restaurant) {
         let restaurantName = restaurant.shift();
         let employees = restaurant.pop().split(', ');

         let obj = {
            restaurantName, employees: [],
            getEmployee(employee) {
               let [name, salary] = employee.split(' ');
               let employeeObj = { name, salary: Number(salary) };
               this.employees.push(employeeObj);
            },
            getBestSalary() {
               return this.employees[0].salary;
            },
            getAvgSalary() {
               let avg = this.employees.reduce((a, x) => a += x.salary, 0);
               return avg / this.employees.length;
            }
         };

         while (employees.length) {
            let employee = employees.shift();
            obj.getEmployee(employee);
         }
         restaurants.push(obj);

         for (let i = 0; i < restaurants.length - 1; i++) {
            if (restaurantName === restaurants[i].restaurantName) {
               restaurants[i].employees = Object.values(restaurants[i])[1].concat(obj.employees);
               restaurants.pop();
            }
         }
      };

      function compareAndAssign(restaurants) {
         let best = restaurants[0];
         restaurants.forEach(r => {
            r.employees.sort((a, b) => b.salary - a.salary)
            if (r.getAvgSalary() > best.getAvgSalary()) best = r;
         });

         bestRestaurantOutput.textContent =
            `Name: ${best.restaurantName} Average Salary: ${best.getAvgSalary().toFixed(2)} Best Salary: ${best.getBestSalary().toFixed(2)}`;
         best.employees.forEach(e => workersOutputElement.textContent += `Name: ${e.name} With Salary: ${e.salary} `);
      }
   }
}
