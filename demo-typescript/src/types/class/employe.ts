import { Person } from "./person";

export class Employee extends Person {
    private position: string;

    constructor(name: string, age: number, country: string, position: string) {
        super(name, age, country);
        this.position = position;
    }

    public getDetails(): string {
        return `${this.greet()} and I work as a ${this.position}.`;
    }
}