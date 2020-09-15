interface ComponentD {
    operation(): string
}

class ConcreteComponent implements ComponentD {
    public operation(): string {
        return 'ConcreteComponent'
    }
}

class Decorator implements ComponentD {
    protected component: ComponentD

    constructor(component: ComponentD) {
        this.component = component
    }

    public operation(): string {
        return this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`
    }
}

function clientCode(component: ComponentD) {
    console.log(`result is ${component.operation()}`)
}

const simple = new ConcreteComponent()
clientCode(simple)

const decorator1 = new ConcreteDecoratorA(simple)
const decorator2 = new ConcreteDecoratorB(decorator1)

clientCode(decorator2)