import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Login } from 'src/common/interfaces/LoginForm.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login: Login = {
    email: '',
    password: ''
  }

  loginSuccess = false;

  loginUser(loginForm : NgForm){
    this.authService.login(this.login).subscribe((data) => {
      console.log(data);
      loginForm.reset();
      this.loginSuccess = true;
      this.router.navigate(['posts'])
    });
  }
}
