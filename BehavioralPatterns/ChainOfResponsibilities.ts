interface Handler {
    setNext(handler: Handler): Handler

    handle(request: string): string
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler
        return handler
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request)
        }
        return null
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Banana') {
            return 'Monkey'
        }
        return super.handle(request)
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Nut') {
            return 'Squirrel'
        }
        return super.handle(request)
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Meat') {
            return 'Dog'
        }
        return super.handle(request)
    }
}

function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee', 'Meat']

    for (const food of foods) {
        console.log(`Who wants a ${food}`)

        const result = handler.handle(food)
        if (result) {
            console.log(result)
        } else {
            console.log(`${food} was left untouched`)
        }
    }
}

const monkey = new MonkeyHandler()
const squirrel = new SquirrelHandler()
const dog = new DogHandler()

monkey.setNext(squirrel).setNext(dog)

clientCode(monkey)