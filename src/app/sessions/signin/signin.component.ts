import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { logging } from 'protractor';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


    loginFailed: boolean = false;
    authenticated: boolean = false;
    j_username: string = "admin";
    j_password: string = "admin";
    public form: FormGroup;
    constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.form = this.fb.group({
            uname: [null, Validators.compose([Validators.required])], password: [null, Validators.compose([Validators.required])]
        });

        this.authService.isAuthenticated().
            subscribe(
                resp => {
                    if (resp) {
                        this.authenticated = true;
                    } else {
                        this.authenticated = false;
                    }
                    //this.displayLoginDialog = !this.authenticated;
                    if (this.authenticated) {
                        //this.items.push({label: 'Sign out', url: '/api/logout', icon: 'fa-sign-out' });
                        console.log('You are authenticated...', '');
                    } else {
                        console.log('You are NOT authenticated...', '');
                    }
                },
                error => console.log("Error")
            );
    }

    onSubmit() {
        this.login();
    }

    login() {
        this.authService.login(this.j_username, this.j_password).
            subscribe(
                loginOk => {
                    if (loginOk) {
                        this.authenticated = true;
                        this.loginFailed = false;
                        this.router.navigate(['cenid']);
                    } else {
                        this.loginFailed = true;
                        this.authenticated = false;
                    }
                },
                error => {
                    this.loginFailed = true;
                    this.authenticated = false;
                }
            );
    }

}
