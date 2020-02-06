const Employee = require("../lib/employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}
// const e = new Manager("Jordan", 43, "jsmith@gmail.com", 345);
// console.log(e);

module.exports = Manager;