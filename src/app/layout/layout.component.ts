import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
 
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  email: string;
  isCollapsed = false;
  logout() {
    this.authService.logout();
  }

  
}
