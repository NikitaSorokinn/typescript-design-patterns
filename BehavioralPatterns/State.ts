class Context {
    private state: State

    constructor(state: State) {
        this.transitionTo(state)
    }

    public transitionTo(state: State): void {
        this.state = state
        this.state.setContext(this)
    }

    public request1(): void {
        this.state.handle1()
    }

    public request2(): void {
        this.state.handle2()
    }
}

abstract class State {
    protected context: Context

    public setContext(context: Context) {
        this.context = context
    }

    public abstract handle1(): void

    public abstract handle2(): void
}

class ConcreteStateA extends State {
    public handle1() {
        console.log('StateA handle1')
        this.context.transitionTo(new ConcreteStateB())
    }

    public handle2() {
        console.log(`StateA handle2`)
    }
}

class ConcreteStateB extends State {
    public handle1() {
        console.log(`StateB handle1`)
    }

    public handle2() {
        console.log(`StateB handle2`)
        this.context.transitionTo(new ConcreteStateA())
    }
}

const context = new Context(new ConcreteStateA())
context.request1()
context.request2()
context.request2()