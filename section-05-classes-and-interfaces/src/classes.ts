abstract class Department {
	protected employees: string[] = []
	static staticProperty = 'Static property value'

	constructor(private readonly id: string, public name: string) {
	}

	abstract describe(): void

	static staticMethod() {
		return `${Department.staticProperty} : ${this.staticProperty}`
	}

	get ID() {
		return this.id
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	pringEmployeeInformation() {
		console.log(`Number of employees: ${this.employees.length}`)
		console.log(this.employees)
	}
}

class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		super(id, 'IT')
	}

	describe(): void {
		console.log(`IT Department - name: ${this.name}`)	
	}
}

class AccountingDepartment extends Department {
	private lastReport: string
	private static instance: AccountingDepartment
	#foo = 'Foo'

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
		this.lastReport = reports[reports.length - 1]
	}

	static getInstance() {
		if (AccountingDepartment.instance) { 
			return this.instance
		}
		this.instance = new AccountingDepartment('A1', [])
		return this.instance
	}
	describe(): void {
		console.log(`Accounting Department - name: ${this.name}`)	
	}

	get foo() {
		return this.#foo
	}

	set foo(value: string) { 
		this.#foo = value
	}

	set mostRecentReport(report: string) {
		if (report === '') {
			throw new Error('Must provide a valid report.')
		}
		this.addReport(report)
	}

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport
		}
		throw new Error('No report found.')
	}

	addEmployee(name: string): void {
		if (name === 'John') {
			return
		}
		this.employees.push(name)
	}

	addReport(text: string) {
		this.reports.push(text)
		this.lastReport = text
	}

	printReports() {
		console.log(this.reports)
	}
}

console.log(Department.staticMethod())

const it = new ITDepartment('d1', ['Peter'])
it.addEmployee('Peter')
it.addEmployee('Robert')
it.describe()
it.name = 'New Name'
it.pringEmployeeInformation()
console.log(it)

// const accounting = new AccountingDepartment('a1', [])
const accounting = AccountingDepartment.getInstance()
accounting.describe()
accounting.addReport('Accounting report here...')
accounting.mostRecentReport = 'New Report'
accounting.printReports()
console.log(accounting.foo)
