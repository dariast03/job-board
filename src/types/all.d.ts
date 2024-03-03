export type UserData = {
    id: number
    avatar: string
    name: string
}

export const loggedInUserData = {
    id: 5,
    avatar: '/LoggedInUser.jpg',
    name: 'Jakob Hoeg',
}

export type LoggedInUserData = typeof loggedInUserData

export interface Message {
    id: number
    avatar: string
    name: string
    message: string
}

export interface User {
    id: number
    avatar: string
    messages: Message[]
    name: string
}
