interface IPrototype {
    clone():IPrototype
}

class Prototype implements IPrototype {
    public primitive: any
    public component: object
    public circularReference: ComponentWithBackReferences

    public clone():this {

        const clone = Object.create(this)
        clone.component = Object.create(this.component)
        clone.circularReference = {
            ...this.circularReference,
            prototype: {...this}
        }

        return clone
    }
}

class  ComponentWithBackReferences {
    public prototype

    constructor(prototype: IPrototype) {
        this.prototype = prototype
    }
}

function clientCode() {
    const p1 = new Prototype()
    p1.primitive = 24
    p1.component = new Date()
    p1.circularReference = new ComponentWithBackReferences(p1)

    const p2 = p1.clone()

    console.log("Object")
    console.log(p1, "\n")
    console.log("Clone")
    console.log(p2)
}

clientCode()