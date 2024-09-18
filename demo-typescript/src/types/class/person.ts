export class Person2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

export class Person {
    private name: string;
    protected age: number;
    public country: string;

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    public greet(): string {
        return `Hello, I am from ${this.country}`;
    }
}

