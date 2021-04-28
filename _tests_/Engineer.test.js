
const Engineer = require ('../lib/Engineer');

test("create engineer object", () => {
    expect(Engineer.name).toEqual(expect.any(String));
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
    expect(email.email).toBe('employeeA@company.com')
});

const username = {github:'employeeA'}
test("retrive github usename", () => {
    expect(username.github).toBe('employeeA');
})