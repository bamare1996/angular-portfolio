import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio-home',
  imports: [CommonModule],
  templateUrl: './portfolio-home.html',
  styleUrl: './portfolio-home.css'
})
export class PortfolioHome {
  constructor(public router: Router) {}

}
