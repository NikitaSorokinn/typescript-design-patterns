interface Mediator {
    notify(sender: object, event: string): void
}

class ConcreteMediator implements Mediator {
    private component1: Component1

    private component2: Component2

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1
        this.component1.setMediator(this)
        this.component2 = c2
        this.component2.setMediator(this)
    }

    public notify(sender: object, event: string) {
        if (event === "1") {
            console.log('do1')
        }
        else if (event === "2") {
            console.log('do2')
        }
    }
}

class BaseComponent {
    protected mediator: Mediator

    constructor(mediator: Mediator = null) {
        this.mediator = mediator
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator
    }
}

class Component1 extends BaseComponent {
    public do(): void {
        this.mediator.notify(this, '1')
    }
}

class Component2 extends BaseComponent {
    public do(): void {
        this.mediator.notify(this, '2')
    }
}

const c1 = new Component1()
const c2 = new Component2()
const mediator = new ConcreteMediator(c1, c2)

c1.do()
c2.do()