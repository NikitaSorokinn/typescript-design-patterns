class ContextStrategy {
    private strategy: Strategy

    constructor(strategy: Strategy) {
        this.strategy = strategy
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    public doSomeBusinessLogic(): void {
        const result = this.strategy.doAlgorithm(['b', 'a', 'd', 'c', 'e'])
        console.log(result.join(','))
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[]
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort()
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse()
    }
}

const contextStrategy = new ContextStrategy(new ConcreteStrategyA())
contextStrategy.doSomeBusinessLogic()

contextStrategy.setStrategy(new ConcreteStrategyB())
contextStrategy.doSomeBusinessLogic()