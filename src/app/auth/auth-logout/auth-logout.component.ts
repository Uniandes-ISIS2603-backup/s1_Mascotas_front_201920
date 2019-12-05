import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.css']
})
export class AuthLogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit()
  {
      this.authService.logout();
      this.toastrService.success('Logged out');
      window.location.reload();

  }

}
