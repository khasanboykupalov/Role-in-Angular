import { Component, OnInit } from "@angular/core";
import {ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../core/services/auth.services";
import { UserService } from "../../core/services/user.services";
import { User } from "../../core/models/user.model";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector:'profile',
    standalone:true,
    imports:[ReactiveFormsModule, CommonModule,  MatFormFieldModule,  MatInputModule, MatButtonModule ],
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.css'
})

export class ProfileComponent implements OnInit {

    form!: ReturnType<FormBuilder['group']>;

    
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private userService: UserService
    ){}

    ngOnInit() {
        this.form = this.fb.group ({
            name: ['', Validators.required],
            avatar: ['', ]
        })

        const user = this.authService.currentUser();
        if(user) {
            this.form.patchValue({
                name:user.name,
                avatar:user.nickname
            });
        }
    }

    save() {
        const currentUser = this.authService.currentUser();
        if(!currentUser) return;

        const updatedUser: User = {
            ...currentUser,
            ...this.form.value
        };

        this.userService.updateUser(updatedUser);
        this.authService.refreshUser(updatedUser)

        alert("Profil yangilandi")
    }

}


