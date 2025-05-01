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
        password:'user1',
        role:'user',
        name:'Regular User 1',
        nickname:'somethinf'
    },
    {
        id:3,
        email: 'user@example.com',
        password:'user2',
        role:'user',
        name:'Regular User 2 ',
        nickname:'somethinf'
    },
    {
        id:4,
        email: 'user@example.com',
        password:'user3',
        role:'user',
        name:'Regular User 3',
        nickname:'somethinf'
    }
]