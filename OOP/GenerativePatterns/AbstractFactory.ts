/*
    Абстрактная фабрика - это порождающий паттерн проектирования, 
        который позволяет создавать семейства связанных объектов, 
        не привязываясь к конкретным классам создаваемых объектов.
*/

interface AbstractFactory {
    createProductA(): AbstractProductA
    createProductB(): AbstractProductB
}

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1()
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB1()
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2()
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB2()
    }
}

interface AbstractProductA {
    usefulFunctionA():string
}

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA():string {
        return 'productA1'
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA():string {
        return 'productA2'
    }
}

interface AbstractProductB {
    usefulFunctionB():string
    anotherUsefulFunctionB(collaborator: AbstractProductA): string
}

class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB():string {
        return 'productB1'
    }
    public anotherUsefulFunctionB(collaborator: AbstractProductA):string {
        const result = collaborator.usefulFunctionA()
        return `productB1 with ${result}`
    }
}

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB():string {
        return 'productB2'
    }
    public anotherUsefulFunctionB(collaborator: AbstractProductA):string {
        const result = collaborator.usefulFunctionA()
        return `productB2 with ${result}`
    }
}

// @ts-ignore
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA()
    const productB = factory.createProductB()

    console.log(productB.usefulFunctionB())
    console.log(productB.anotherUsefulFunctionB(productA))
}

clientCode(new ConcreteFactory1())
console.log(" ")
clientCode(new ConcreteFactory2())