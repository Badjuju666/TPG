
const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.getCard();
        this.getColor();
    }

    getColor(){
        return ('bg-danger')
    }

    getRole(){
        return ('Engineer')
    }
}

module.exports = Engineer