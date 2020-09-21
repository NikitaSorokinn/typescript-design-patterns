class Target {
    public request(): string {
        return 'Targer: the default target behavior'
    }
}

class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS'
    }
}

class Adapter extends Target {
    private adaptee: Adaptee

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('')
        return `Adapter: (TRANSLATED) ${result}`
    }
}

function clientCode(target: Target) {
    console.log(target.request())
}

const target = new Target()
clientCode(target)

const adaptee = new Adaptee()
const adapter = new Adapter(adaptee)
clientCode(adapter)