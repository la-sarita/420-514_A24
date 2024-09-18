import express, { Request, Response } from 'express';
import { Color } from './enum/color.enum';
import { Status } from './enum/status.enum';
import { User } from './interface/user.interface';

const app = express();
const port = 3001;

let age: number = 30;   // variable modifiable
let price: number = 19.99;
const name: string = "Alice";   // variable constante
let isStudent: boolean = true;
let hasGraduated: boolean = false;
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];
let numbersArray: Array<number> = [1, 2, 3, 4];
let namesArray: Array<string> = ["Alice", "Bob", "Charlie"];
let personTuple: [string, number] = ["Alice", 25];
let myColor: Color = Color.Green;
console.log(myColor);  // 1
let userStatus: Status = Status.Active;
console.log(userStatus);  // 1
let randomValue: any = 10;
randomValue = "Hello";  // autorisé
randomValue = true;     // autorisé
let u: undefined = undefined;
let n: null = null;
let person: object = { name: "Alice", age: 25 };
let id: number | string;
id = 123;    // valide
id = "ABC";  // valide
type UserId = number | string;
let userId: UserId;
userId = 123;     // valide
userId = "ABC";   // valide
let age2 = 30;  // TypeScript infère automatiquement que `age` est de type `number`.
//age2 = "30";    // Erreur, car `age` est supposé être un nombre.
let direction: "left" | "right" | "up" | "down";
direction = "left";  // valide
//direction = "center";  // Erreur, "center" n'est pas un type valide
function greet(name: string): string {
    return `Hello, ${name}`;
}

function logMessage(message: string): void {
    console.log(message);
}

function subtract(a: number, b: number) {
    return a - b;  // TypeScript infère que la valeur de retour est un number
}

let greetFn = (name: string) => {
    return `Hello, ${name}`;
};

function greet2(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}!`;
}

function greet3(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

function greetUser(user: User): string {
    return `Hello, ${user.name}, who is ${user.age} years old!`;
}

function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(2, 3)); // 6

console.log(greetUser({ name: "Alice", age: 25 })); // Hello, Alice, who is 25 years old!

console.log(greet3("Alice")); // Hello, Alice!
console.log(greet3("Bob", "Hi")); // Hi, Bob!

console.log(greet2("Alice")); // Hello, Alice!
console.log(greet2("Bob", "Hi")); // Hi, Bob!

let message: string = greet("Alice");  // "Hello, Alice"
console.log(message);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});