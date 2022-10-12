let sitePersonnel = {};
let employees = [];
sitePersonnel.employees = employees;
console.log(sitePersonnel);

let firstName = "John";
let lastName = "Smith";
let employee = {
  firstName,
  lastName,
};
sitePersonnel.employees.push(employee);

console.log(JSON.stringify(sitePersonnel));