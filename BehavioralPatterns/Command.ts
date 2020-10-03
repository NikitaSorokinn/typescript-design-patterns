interface Command {
    execute(): void
}

class SimpleCommand implements Command {
    private payload: string

    constructor(payload: string) {
        this.payload = payload
    }

    public execute() {
        console.log(`SimpleCommand: ${this.payload}`)
    }
}

class ComplexCommand implements Command {
    private receiver: Receiver

    private a: string

    private b: string

    constructor(receiver: Receiver, a: string, b: string) {
        this.receiver = receiver
        this.a = a
        this.b = b
    }

    public execute() {
        console.log(`ComplexCommand`)
        this.receiver.doSomething(this.a)
        this.receiver.doSomethingElse(this.b)
    }
}

class Receiver {
    public doSomething(a: string): void {
        console.log(`Receiver: ${a}`)
    }

    public doSomethingElse(b: string): void {
        console.log(`Receiver: ${b}`)
    }_
}

class Invoker {
    private onStart: Command

    private onFinish: Command

    public setOnStart(command: Command): void {
        this.onStart = command
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command
    }

    public doSomethingImportant(): void {
        if (this.isCommand(this.onStart)) this.onStart.execute()

        if (this.isCommand(this.onFinish)) this.onFinish.execute()
    }

    private isCommand(object): boolean {
        return object.execute !== undefined
    }
}

const invoker = new Invoker()
invoker.setOnStart(new SimpleCommand('Hi'))
const receiver = new Receiver()
invoker.setOnFinish(new ComplexCommand(receiver, 'bye', 'Goodbye '))

invoker.doSomethingImportant()