

const Manager = require("../lib/Manager");

test("creates manager object", () => {
    expect(Manager.name).toEqual(expect.any(String));
});

    const idnumber = {
        name: 'employeeA',
        id: 'A12345'
    };

    test("get employee id", () => {
        expect(idnumber.id).toBe('A12345');
    })

    const email = {
        name: 'employeeA',
        email: 'employeeA@company.com'
    };

    test("get employee email", () => {
        expect(email.email).toBe('employeeA@company.com');
    })

const office = { 
    phone: '123-456-7890'
};

test("get employee phone number", () => {
    expect(office.phone).toBe('123-456-7890')
});