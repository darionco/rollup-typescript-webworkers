export class MessageManager {
    private readonly message: string;

    public constructor(message: string) {
        this.message = message;
    }

    public sayHello(location: string): void {
        console.log(`Hello from ${location}!`);
    }

    public printMessage(): void {
        console.log(`MESSAGE: ${this.message}`);
    }
}
