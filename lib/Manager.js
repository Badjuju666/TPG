
const kaRen = require('./Employee.js')

class Manager extends kaRen {
    constructor(name, id, email, officenumber){
        super(name, id, email); 
        this.office = officenumber; 
        this.getCard2();
        this.getColor();
        this.getColor2();
    }

    getColor(){
        return ('bg-warning')
    }

    getColor2(){
        return ('bg-warning bg-gradient')
    }

    getRole(){
        return ('Manager')
    }
}

module.exports = Manager;