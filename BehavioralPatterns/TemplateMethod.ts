abstract class AbstractClass {

    public templateMethod(): void {
        this.baseOperation1()
        this.requiredOperation1()
        this.baseOperation2()
        this.hook1()
        this.requiredOperation2()
        this.baseOperation3()
        this.hook2()
    }

    protected baseOperation1(): void {
        console.log('baseOperation1')
    }

    protected baseOperation2(): void {
        console.log('baseOperation2')
    }

    protected baseOperation3(): void {
        console.log('baseOperation3')
    }

    protected abstract requiredOperation1(): void

    protected abstract requiredOperation2(): void

    protected hook1(): void {}

    protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log(`ConcreteClass1 implement requiredOperation1`)
    }

    protected requiredOperation2(): void {
        console.log(`ConcreteClass1 implement requiredOperation2`)
    }
}

class ConcreteClass2 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log(`ConcreteClass2 implement requiredOperation1`)
    }

    protected requiredOperation2(): void {
        console.log(`ConcreteClass2 implement requiredOperation2`)
    }

    protected hook1(): void {
        console.log(`ConcreteClass2 hook1`)
    }
}

function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMethod()
}

clientCode(new ConcreteClass1())
console.log(`\n`)
clientCode(new ConcreteClass2())