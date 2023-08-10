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
// update 10.08.2023 - the types appended with & do not override the previous ones
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



/**
 * Parameters
 * creates type from function name
 * used to prepare data of the same type as the parameter
 * 
 * function parameters are like array of parameter elements
 * and they can be accessed like that as well
 * like this: type UserProfileExtracted = Parameters<typeof createUser>['3']; 
 */


// Example 1 - array of arguments

type UserProfile = {
    firstName: string,
    lastName: string,
    alias: string,
    playsFootball: boolean
}

function createUser (username: string, password: string, age: number, profile: UserProfile) {
    return { username, age, profile };
}

type CreateUserInput = Parameters<typeof createUser>
type UserProfileExtracted = Parameters<typeof createUser>['3'];     // just extracting to learn how this thing works

const userProfile = {} as UserProfileExtracted;

// now use the created type
const userData: CreateUserInput = ["shourov", "123", 29, userProfile];

createUser(...userData);



// Example 2 - single argument

function createUser2 ({username, password}: {username: string, password: string}) {
    return { username, password }
}

type CreateUserInput2 = Parameters<typeof createUser2>[number]      // this [number] thing creates union type from all the function parameters

const userData2: CreateUserInput2 = { username: "shourov", password: "123" };

createUser2(userData2)



/**
 * ReturnType
 * type of the return
 */

async function createUser3 (username: string, password: string) {
    return { username, password }
}

type CreateUserResultPromise = ReturnType<typeof createUser3> // the promise type from async function
type CreateUserResult = Awaited<ReturnType<typeof createUser3>>