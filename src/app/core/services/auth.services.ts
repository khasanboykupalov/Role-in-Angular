import { Injectable, signal } from "@angular/core";
import { MOCK_USERS } from "../mock/mock.users";
import { User } from "../models/user.model";

@Injectable({providedIn:'root'})

export class AuthService {
    private _currentUser = signal<User | null>(null);
    
    login(email:string, password:string): boolean {
        const foundUser = MOCK_USERS.find(
            user =>user.email === email && user.password === password);
        if(foundUser) {
            this._currentUser.set(foundUser);
            return true;
        }

        return false
    }

    logout() {
        this._currentUser.set(null);
    }

    get currentUser() {
        return this._currentUser.asReadonly();
    }

    isLoggedIn(): boolean {
        return this._currentUser() !==null
    }

    isAdmin(): boolean {
        return this._currentUser()?.role === 'admin'
    }
}