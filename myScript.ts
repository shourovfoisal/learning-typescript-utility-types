import { User } from "./types/User";

/**
 * Omit
 * omits types
 */
type UserPublicProfile = Omit<User, "password" | "phone">;
// interface UserPublicProfile extends Omit<User, "password" | "phone">{};  // exactly the same as above

/**
 * Pick
 * picks types
 * just opposite to Omit
 */
type UserPrivateProfile = Pick<User, "email" | "password" | "phone">;


/**
 * Partial
 * turns all types into optional
 */
type UserPartial = Partial<User>;

// can be modified
type UserPartialAndCityRequired = Partial<User> & {
    city: string
}
const userPartialAndCityRequired: UserPartialAndCityRequired = { city: "Dhaka" } ;

/**
 * Required
 * turns all types into required
 * just opposite to partial
 */
type UserRequired = Required<User>;

// but this does not seem to be modified like Partial and throws error
// TODO - find a way to resolve this error
type UserRequiredAndNameOptional = Required<User> & {
    name?: string
}
const userRequiredAndNameOptional: UserRequiredAndNameOptional = {
    age: 29, 
    email: "shourov@gmail.com", 
    password: "123", 
    address: "Mirpur", 
    city: "Dhaka", 
    phone: "123 123"
}

/**
 * Record
 * allows to use map like data structure
 */

// example 1
const usersRecord: Record<string, User> = {
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
}

// example 2

type Data = {
    name: string,
    age: number
}

const data: Data[] = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Jane",
        age: 25
    }
]

const result = data.reduce((accumulator: Record<string, Data>, currentValue, currentIndex) => {
    accumulator[String(currentIndex)] = { ...currentValue };
    return accumulator;
}, {});

console.log("record example 2 result");
console.log(result);
console.log(result['0'].name);
console.log(result['1'].age);