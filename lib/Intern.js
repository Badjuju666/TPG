
const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.getCard();
        this.getColor();
    }

    getColor(){
        return ('bg-info')
    }

    getRole(){
        return ('Intern')
    }
}

module.exports = Intern