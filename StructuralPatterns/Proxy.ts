interface Subject {
    request(): void
}

class RealSubject implements Subject {
    public request() {
        console.log('RealSubject: Handling request.')
    }
}

class Proxy implements Subject {
    private realSubject: RealSubject

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject
    }

    public request() {
        if (this.checkAccess()) {
            this.realSubject.request()
            this.logAccess()
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access')
        return true
    }

    private logAccess(): void {
        console.log('Proxy: logging')
    }
}

function clientCode(subject: Subject) {
    subject.request()
}

const realSubject = new RealSubject()
clientCode(realSubject)

console.log('\n')

const proxy = new Proxy(realSubject)
clientCode(proxy)