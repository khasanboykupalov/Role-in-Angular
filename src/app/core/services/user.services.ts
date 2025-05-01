import { computed, Injectable, signal } from "@angular/core";
import { User } from "../models/user.model";
import { MOCK_USERS } from "../mock/mock.users";

@Injectable({providedIn: 'root'})

export class UserService {
    private _users = signal<User[]>([...MOCK_USERS])

    users = computed(() => this._users());

    getUserById(id:number):User | undefined {
        return this._users().find(user => user.id === id);
    }

    updateUser(updated:User): void {
        this._users.update(users => 
            users.map(user => (user.id === updated.id ? {...user, ...updated}: user ))
        );
    }

    deleteUser(id:number) {
        this._users.update(users => users.filter(user => user.id !== id) )
    }

    addUser(user:User): void {
        this._users.update(users => [...users, user])
    }
  
}