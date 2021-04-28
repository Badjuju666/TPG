
const Intern = require('../lib/Intern');

test("create intern object", () => {
    expect(Intern.name).toEqual(expect.any(String));
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

const school = {name: 'UCLA'}

test("get school name", () => {
    expect(school.name).toBe('UCLA');
})