import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from "../../core/services/auth.services";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";





@Component({
    selector:'login',
    standalone:true,
    imports:[MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule,],
    templateUrl:'./login.component.html',
    styleUrl:'./login.component.css'
})

export class LoginComponent {
    form: FormGroup;

    constructor( 
        private fb:FormBuilder,
        private auth:AuthService,
        private router:Router
    ) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password:['',[Validators.required]]
        });
    }

    onSubmit() {
        const {email, password} = this.form.value;
        const success = this.auth.login(email, password);

        if(success) {
            this.router.navigateByUrl(this.auth.isAdmin() ? '/admin' : '/profile')
        } else {
            alert('Notogiri parol yoki email')
        }
    }
}