class Flyweight {
    private readonly sharedState: any

    constructor(sharedState: any) {
        this.sharedState = sharedState
    }

    public operation(uniqueState): void {
        const s = JSON.stringify(this.sharedState)
        const u = JSON.stringify(uniqueState)
        console.log(`share: ${s}, unique: ${u}`)
    }
}

class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = <any>{}

    constructor(initialFlyweight: string[][]) {
        for (const state of initialFlyweight) {
            this.flyweights[this.getKey(state)] = new Flyweight(state)
        }
    }

    private getKey(state: string[]): string {
        return state.join('_')
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState)

        if (!(key in this.flyweights)) {
            //cant find
            this.flyweights[key] = new Flyweight(sharedState)
        }
        else {
            //reusing
        }

        return this.flyweights[key]
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length
        console.log(`I have ${count} flyweights`)
        for (const key in this.flyweights) {
            console.log(key)
        }
    }
}

const newFactory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
    // ...
])
newFactory.listFlyweights()

function addCartToPoliceDatabase(
    ff: FlyweightFactory, plates: string, owner: string,
    brand: string, model: string, color: string
) {
    const flyweight = ff.getFlyweight([brand, model, color])

    flyweight.operation([plates, owner])
}

addCartToPoliceDatabase(newFactory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red')

addCartToPoliceDatabase(newFactory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red')

newFactory.listFlyweights()