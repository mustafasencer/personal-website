export interface IMain {
    name: string,
    bio: string,
    email: string,
    city: string,
    phone: string,
    occupation: string,
    description: string,
    social: Network[],
    image?: string,
    contactmessage?: string,
    address: Address
}

export type Address = {
    street: string,
    state: string,
    zip: number
}

export type Network = {
    name: string,
    className: string,
    url: string
}
