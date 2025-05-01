import { User } from "../models/user.model";

export const MOCK_USERS: User[] = [
    {
        id: 1,
        email: 'admin@example.com',
        password: 'admin',
        role: 'admin',
        name: 'Admin User',
        nickname: 'something'
    },
    {
        id:2,
        email: 'user@example.com',
        password:'user',
        role:'user',
        name:'Regular User',
        nickname:'somethinf'
    }
]