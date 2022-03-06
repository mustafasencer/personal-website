export interface IMain {
    name: string,
    email: string,
    city: string,
    occupation: string,
    social: Network[],
}

export type Network = {
    name: string,
    className: string,
    url: string
}
