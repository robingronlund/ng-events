import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/index';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  returnUrl: string;
  routedata: Observable<string>;

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';

  }

  logout() {
    this.apiService.logout()
      .subscribe(
      (data) => { },
      (err) => { },
      () => { this.router.navigate([this.returnUrl]) }
      )
  }
}
