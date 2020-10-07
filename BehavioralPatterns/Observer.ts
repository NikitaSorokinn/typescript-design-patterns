interface Array<T> {
    contains(obj: T): boolean
}

Array.prototype.contains = function (obj) {
    let i = this.length
    while (i--) {
        if (this[i] === obj) {
            return true
        }
    }
    return false
}

interface SubjectObserver{
    attach(observer: Observer): void

    detach(observer: Observer): void

    notify(): void
}

class ConcreteSubject implements SubjectObserver {
    public state: number

    private observers: Observer[] = []

    public attach(observer: Observer) {
        const isExist = this.observers.contains(observer)
        if (isExist) {
            console.log(`observer has been attached`)
            return
        }

        console.log(`Attached observer`)
        this.observers.push(observer)
    }

    public detach(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer)

        if (observerIndex === -1) {
            console.log(`Nonexistent observer`)
            return
        }

        this.observers.slice(observerIndex, 1)
        console.log(`Detached observer`)
    }

    public notify() {
        console.log(`notify observers`)
        for (const observer of this.observers) {
            observer.update(this)
        }
    }

    public someBusinessLogic(): void {
        this.state = Math.floor(Math.random() * (10 + 1))
        console.log(`State has been changed to: ${this.state}`)
        this.notify()
    }
}

interface Observer {
    update(subject: SubjectObserver): void
}

class ConcreteObserverA implements Observer {
    public update(subject: SubjectObserver) {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log(`Reacted to the event A`)
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: SubjectObserver) {
        if (subject instanceof ConcreteSubject && subject.state >= 3) {
            console.log(`Reacted to the event B`)
        }
    }
}

const subject = new ConcreteSubject()

const observer1 = new ConcreteObserverA()
subject.attach(observer1)

const observer2 = new ConcreteObserverB()
subject.attach(observer2)

subject.someBusinessLogic()
subject.someBusinessLogic()