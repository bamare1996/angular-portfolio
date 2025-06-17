import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { PortfolioCv } from "./portfolio-cv/portfolio-cv";
import { PortfolioHome } from "./portfolio-home/portfolio-home";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-portfolio';
  constructor(public router: Router) {}
}
