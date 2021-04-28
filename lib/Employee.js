const Manager = require("./Manager");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole()
        this.card
        this.card2
        this.color = this.getColor()
        // this.getCard()
    }

    getColor() {
        return this.color
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }

    // getCard(){
    //     this.card = 
    //     `<table class="${this.color} table table-sm table-striped caption-top">
    //         <caption>${this.role}</caption>
    //         <tbody>
    //             <tr>
    //                 <th scope="row">Name:</th>
    //                 <td>${this.name}</td>
    //             </tr>
    //             <tr>
    //                 <th scope="row">ID:</th>
    //                 <td>${this.id}</td>
    //             </tr>
    //             <tr>
    //                 <th scope="row">Email:</th>
    //                 <td><a href="mailto:${this.email}">${this.email}</a></td>`
    //                 if (this.role === 'Manager') {
    //                     this.card += `<th scope="row">Office Number:</th>
    //                                   <td>${this.office}</td>`
    //                 } else if (this.role === 'Engineer') {
    //                     this.card += `<th scope="row">Github:</th>
    //                                   <td> <a href="https://github.com/${this.github}"> target="_blank">${this.github}</a></td>`
    //                 } else if (this.role += 'Intern') {
    //                     this.card += `<th>School:</th>
    //                                   <td>${this.school}</td>`
    //                 }
    //                 this.card +=`</tr></tbody></table>`

    // }

    // getCard2(){
    //     this.card =
    //     `<div class="flex-wrap flex-column flex-md-row justify-content-between px-2 pb-3 border ${this.color} border-dark rounded-top">
    //     <h4 class="card-header border-dark">Manager</h4>
    //     <div class="card-body ${this.color}">
    //       <h5 class="card-title">${this.name}</h5>
    //       <p class="card-text">Employee ID: ${this.id}</p>
    //       <p class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a></p>
    //       <p class="card-text">Office Number: ${this.office}</p>
    //     </div>
    //   </div>

    //   <h4 class="border-left border-right border-dark card-header w-100">${this.name} Team</h4>
    //   <div class="card-deck border-right border-dark d-flex flex-wrap flex-column flex-md-row justify-content-between px-2 pb-3 mb-5">
    //     `
    //     this.card2 +=`</div></div>`
    // }


    getCard() {
        this.card =
            `
        <div class="col">    
            <div class="card ${this.color} border-success mb-3 card d-flex justify-content-around">
                <div class="d-flex justify-content-around mt-3 mx-2">
                    <h4 class="card-header">${this.role}</h4>    
                </div>
                <div class="card-body ${this.color} mt-3 mx-2 px-3">
                    <h4 class="card-title text-center">${this.name}</h4>
                    <p class="card-text">ID: ${this.id}</p>
                    <p class="card-text">Email- <a href="mailto:${this.email}">${this.email}</a></p>`
                if (this.role === 'Manager') {
                    this.card += `<p class="card-text">Office number- ${this.office}</p>`
                } else if (this.role === 'Engineer') {
                    this.card += `<p class="card-text">Github Link- <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></p>`
                } else if (this.role === 'Intern') {
                    this.card += `<p class="card-text">School: ${this.school}</p>`
                }

                this.card += 
                    `        
                </div>
            </div>
        
        </div>`

    }

    getCard2() {
        this.card =
            `
        <div class="card border ${this.color} pt-5 border-dark rounded">
            <div class="mt-3 mx-3 d-flex justify-content-around">    
                <h4 class="card-header d-flex justify-content-around border border-dark">${this.role}</h4>
            </div>          
            <div class="card-body ${this.color}">
                <h5 class="card-title text-center">${this.name}</h5>
                <p class="card-text">Employee ID: ${this.id}</p>
                <p class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a></p>
                <p class="card-text">Office Number: ${this.office}</p>
            </div>
            <div class="rounded wrapper text-white bg-warning bg-gradient d-flex justify-content-around border border-light card-footer">
                <h4>${this.name} Team</h4>
            </div>
        </div>
        <div class="mt-5 pt-5 row row-cols-1 row-cols-md-2 g-4">
            `
        this.card2 += 
            `       </div>
            </div>`
    }
};

module.exports = Employee