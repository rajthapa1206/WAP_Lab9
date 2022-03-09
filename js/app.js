"use strict";
//#1 Person object
const person = {
    name: null,
    dateOfBirth: null
};

person.getName = function(){
    return this.name;
}

person.setName = function(name){
    this.name = name;
}

const john = Object.create(person, {
    name: {
        value: "John"
    },
    dateOfBirth: {
        value: new Date(1998,11,10)
    }
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
console.log(`The person's name is ${john.getName()}`);
console.log(`${john.getName()} was born on ${formatDate(john.dateOfBirth)}`);

//#2 Employee Is-A person
const Employee = {
    salary: 0.00,
    hireDate: new Date(),
};
Employee.__proto__ = person;

Employee.doJob = function(jobTitle){
    console.log(`${this.getName()} is a ${jobTitle} who earns $${this.salary}`)
}
const anna = Object.create(Employee, {
    name:{
        value: "Anna"
    },
    dateOfBirth: {
        value: new Date(1990,11,5)
    },
    salary:{
        value: 249995.50
    },
    hireDate: {
        value: new Date()
    }
});
anna.doJob("Programmer");

// #3 Person Object similar to Question 1 but using constructor function and add toString() method

function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}
Person.prototype.toString = function(){
    return `{Name: ${this.name}, DateOfBirth: ${formatDate(this.dateOfBirth)}}`;
}

const peter = new Person("Peter", new Date(1985,10,10));
console.log(peter.toString());