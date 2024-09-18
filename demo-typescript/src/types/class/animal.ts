export abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;  // Méthode abstraite

    move(): void {
        console.log("Moving...");
    }

    speak(): string {
        return `${this.name} makes a sound.`;
    }
}

export class Dog extends Animal {
    speak(): string {
        return `${this.name} barks.`;
    }

    makeSound(): void {
        console.log("Bark!");
    }
}

