/*
    Фабричный метод — это порождающий паттерн проектирования, 
        который определяет общий интерфейс для создания объектов в суперклассе, 
        позволяя подклассам изменять тип создаваемых объектов.
*/

enum PersonCategory {
    Infant,
    Child,
    Adult,
    Undefinde
}

interface IPerson {
    Category: PersonCategory
    canSignContracts(): boolean
    printDetails(): void
}

abstract class Person implements IPerson {
    Category: PersonCategory
    private DateOfBirth: Date

    constructor(dateOfBirth: Date) {
        this.DateOfBirth = dateOfBirth
        this.Category = PersonCategory.Undefinde
    }

    abstract canSignContracts(): boolean
    
    printDetails(): void {
        console.log(`Person: `, `Date of birth: ${this.DateOfBirth.toDateString()} `,
            `Category: ${PersonCategory[this.Category]} `, `Can sign: ${this.canSignContracts()}`)
    }
}

class Infant extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Infant
    }
    canSignContracts():boolean { return false}
}

class Child extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Child
    }
    canSignContracts():boolean { return false}
}

class Adult extends Person {
    constructor(dateOfBirth: Date) {
        super(dateOfBirth)
        this.Category = PersonCategory.Adult
    }
    canSignContracts():boolean { return true}
}

class PersonFactory {
    getPerson(dateOfBirth: Date):IPerson {
        let dateNow = new Date()
        let currentMonth = dateNow.getMonth() + 1
        let currentDate = dateNow.getDate()
        let dateTwoYearsAgo = new Date(
            dateNow.getFullYear() - 2,
            currentMonth,
            currentDate
        )
        let date18YearsAgo = new Date(
            dateNow.getFullYear() - 18,
            currentMonth,
            currentDate
        )

        if (dateOfBirth >= dateTwoYearsAgo) {
            return new Infant(dateOfBirth)
        }
        if (dateOfBirth >= date18YearsAgo) {
            return new Child(dateOfBirth)
        }
        return new Adult(dateOfBirth)
    }
}

let factory = new PersonFactory()
let p1 = factory.getPerson(new Date(2020, 0, 20))
p1.printDetails()
let p2 = factory.getPerson(new Date(2013, 0, 20))
p2.printDetails()
let p3 = factory.getPerson(new Date(2000, 0, 20))
p3.printDetails()