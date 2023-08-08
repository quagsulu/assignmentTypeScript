interface Usertype{
    name: string,
    id?: string|number,
    password: string,
    email: string
}
interface Usertypeadmin{
    name: string,
    id?: string|number,
    password: string,
    email: string,
    roleId: number
}

export type { Usertype ,Usertypeadmin}