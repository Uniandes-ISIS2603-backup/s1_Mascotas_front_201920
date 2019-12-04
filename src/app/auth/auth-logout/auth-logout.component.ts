import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.css']
})
export class AuthLogoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private toastrService: ToastrService) { }

  ngOnInit()
  {
      this.authService.logout();
    this.toastrService.success('Logged out')
  }

}
