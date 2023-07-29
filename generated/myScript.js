"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userPartialAndCityRequired = { city: "Dhaka" };
const userRequiredAndNameOptional = {
    age: 29,
    email: "shourov@gmail.com",
    password: "123",
    address: "Mirpur",
    city: "Dhaka",
    phone: "123 123"
};
/**
 * Record
 * allows to use map like data structure
 */
// example 1
const usersRecord = {
    "1": {
        name: "Shourov",
        age: 29,
        email: "shourov@gmail.com",
        password: "123"
    },
    "2": {
        name: "Foisal",
        age: 29,
        email: "foisal@gmail.com",
        password: "456",
        city: "Pabna"
    }
};
const data = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Jane",
        age: 25
    }
];
const result = data.reduce((accumulator, currentValue, currentIndex) => {
    accumulator[String(currentIndex)] = Object.assign({}, currentValue);
    return accumulator;
}, {});
console.log("record example 2 result");
console.log(result);
console.log(result['0'].name);
console.log(result['1'].age);
