abstract class Component {
    protected parent: Component

    public setParent(parent: Component) {
        this.parent = parent
    }

    public getParent(): Component {
        return this.parent
    }

    public add(component: Component): void {}

    public remove(component: Component): void {}

    public isComposite(): boolean {
        return false
    }

    public abstract operation(): string
}

class Leaf extends Component {
    operation(): string {
        return "Leaf";
    }
}

class Composite extends Component {
    protected children: Component[] = []

    public add(component: Component): void {
        this.children.push(component)
        component.setParent(this)
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component)
        this.children.slice(componentIndex, 1)
        component.setParent(null)
    }

    public isComposite(): boolean {
        return true
    }

    public operation(): string {
        const results = []
        this.children.forEach(obj => results.push(obj.operation()))

        return `Branch(${results.join('+')})`
    }
}

function clientCode(component: Component) {
    console.log(`RESULT is ${component.operation()}`)
}

const tree = new Composite()
const branch1 = new Composite()
branch1.add(new Leaf())
branch1.add(new Leaf())
branch1.add(new Leaf())
const branch2 = new Composite()
branch2.add(new Leaf())
branch2.add(new Leaf())
tree.add(branch1)
tree.add(branch2)
clientCode(tree)
