import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { take } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLocal } from 'src/app/_interfaces/user-local';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  options = this.settings.getOptions();

  constructor(
    private settings: CoreService, 
    private router: Router,
    private authService: AuthService,
    private spinner: NgxUiLoaderService
  ) {
    
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    // this.router.navigate(['/dashboards/dashboard1']);
    this.spinner.start();
    this.authService.login({
      email: this.form.value.email,
      password: this.form.value.password
    }).pipe(take(1)).subscribe((response) => {
      console.log(response)
      this.spinner.stop()
      const userInfoLocal : UserLocal = {
        access_token: response.data.token,
        data: {
          id: response.data.id
        }
      }
      localStorage.setItem("user_data", JSON.stringify(userInfoLocal));
      this.router.navigate(['/pages'])
    }, (error: HttpErrorResponse) => {
      if(error.status == 401){
         this.spinner.stop()
      }
    })
  }
}
