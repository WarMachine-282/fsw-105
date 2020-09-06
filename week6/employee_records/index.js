const employees = [];

function Employee(name, jobtitle, salary, status = "Full Time") {
  this.name = name;
  this.jobtitle = jobtitle;
  this.salary = salary;
  this.status = status;
};
Employee.prototype.printEmployeeForm = function(){
    console.log(`
    Name: ${this.name},
    Job Title: ${this.jobtitle},
    Salary: ${this.salary},
    Status: ${this.status}`);
};

const michael = new Employee("Michael Scott", "Manager", 60000);
const dwight = new Employee("Dwight Schrute", "Salesman", 40000 )
const pam = new Employee("Pam Beesly", "Receptionist", 30210, "Part Time");

michael.printEmployeeForm();
dwight.printEmployeeForm();
pam.printEmployeeForm();

function addEmployeeToArray(e) {
employees.push(e);
}
addEmployeeToArray(michael);
addEmployeeToArray(dwight);
addEmployeeToArray(pam);

console.log(employees);