// Blockly inputs as object properties 
// Creates p5 canvas on DOM 


export class Employee {
    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
    increaseSalary() {
        this.salary += 100;
      }
}
  
