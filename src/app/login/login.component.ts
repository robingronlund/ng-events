import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/index';
import { IUser } from '../models/models';
import { TOASTR_TOKEN, Toastr } from "../common/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  })

  public loginInvalid = false;
  returnUrl: string;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private _toastr: Toastr) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
  }

  login(event) {
    this.apiService.authenticate(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
      (data) => { this._toastr.success("Login successful", "Success!")},
      (err) => { this._toastr.error(`Authentication failed, ${err}`, 'Error!') },
      () => { this.router.navigate([this.returnUrl]) }
      )
  }
}
