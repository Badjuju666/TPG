
const Employee = require("../lib/Employee");

test("create employee object", () => {
    expect(Employee.name).toEqual(expect.any(String));
});

const idnumber = {id: 'A12345'};

test("get employee id", () => {
    expect(idnumber.id).toBe('A12345');
})

const email = {email: 'employeeA@company.com'};

test("get employee email", () => {
    expect(email.email).toBe('employeeA@company.com');

})

test("should return role title", () =>{
    expect(Employee.role).toBe();
})