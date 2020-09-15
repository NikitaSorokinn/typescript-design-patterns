class Abstraction {
    protected implementation: Implementation

    constructor(implementation: Implementation) {
        this.implementation = implementation
    }

    public operation(): string {
        const result = this.implementation.operationImplementation()
        return `Abstraction: Base operation with: ${result}`
    }
}

class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation()
        return `ExternalAbstraction: Extended operation with: ${result}`
    }
}

interface Implementation {
    operationImplementation(): string
}

class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationA'
    }
}

class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationA'
    }
}

function clientCode(abstraction: Abstraction) {
    console.log(abstraction.operation())
}

let implementation = new ConcreteImplementationA()
let implementation2 = new ConcreteImplementationB()
let abstraction = new Abstraction(implementation)
let abstraction2 = new ExtendedAbstraction(implementation2)
clientCode(abstraction)
clientCode(abstraction2)