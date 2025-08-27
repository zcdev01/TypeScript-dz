interface IHare {
	color: string,
	type: string
}

interface IAddress {
	address: string,
	city: string,
	state: string,
	stateCode: string,
	postalCode: string,
	coordinates: {
		lat: number
		lng: number
	},
	country: string
}

interface IBank {
	cardExpire: string,
	cardNumber: string,
	cardType: string,
	currency: string,
	iban: string
}

interface ICompany {
	department: string,
	name: string,
	title: string,
	address: IAddress
}

interface ICrypto {
	coin: string,
	wallet: string,
	network: string
}

enum Role {
	Admin = "admin",
	User = "user",
	Moderator = "moderator"
}

interface User {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: 'male' | 'female';
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: IHare;
	ip: string;
	address: IAddress;
	macAddress: string;
	university: string;
	bank: IBank;
	company: ICompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: ICrypto;
	role?: Role;
}

interface UsersResponse {
	users: User[]
}

const getUsers = async (): Promise<void> => {
	try {
		const resp = await fetch('https://dummyjson.com/users')

		if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`)

		const data: UsersResponse = await resp.json()

		if ('users' in data) {
			const users: User[] = data.users

			console.log('users firstName', users.map(user => user.firstName))
		}
	} catch (error) {
		console.log('Error: ', error)
	}
}

getUsers();
