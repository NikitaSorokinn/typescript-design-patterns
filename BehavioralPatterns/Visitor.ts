interface ComponentVisitor {
    accept(visitor: Visitor): void
}

class ConcreteComponentA implements ComponentVisitor {
    public accept(visitor: Visitor) {
        visitor.visitConcreteComponentA(this)
    }

    public exclusiveMethodA(): string {
        return 'A'
    }
}

class ConcreteComponentB implements ComponentVisitor {
    public accept(visitor: Visitor) {
        visitor.visitConcreteComponentB(this)
    }

    public exclusiveMethodB(): string {
        return 'B'
    }
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void

    visitConcreteComponentB(element: ConcreteComponentB): void
}

class ConcreteVisitor1 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA) {
        console.log(`${element.exclusiveMethodA()} + ConcreteVisitor1`)
    }

    public visitConcreteComponentB(element: ConcreteComponentB) {
        console.log(`${element.exclusiveMethodB()} + ConcreteVisitor1`)
    }
}

class ConcreteVisitor2 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA) {
        console.log(`${element.exclusiveMethodA()} + ConcreteVisitor2`)
    }

    public visitConcreteComponentB(element: ConcreteComponentB) {
        console.log(`${element.exclusiveMethodB()} + ConcreteVisitor2`)
    }
}

function clientCode(components: ComponentVisitor[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor)
    }
}

const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB()
]

const visitor1 = new ConcreteVisitor1()
clientCode(components, visitor1)

const visitor2 = new ConcreteVisitor2()
clientCode(components, visitor2)