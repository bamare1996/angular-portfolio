import { Routes } from '@angular/router';
import { App } from './app';
import { PortfolioCv } from './portfolio-cv/portfolio-cv';
import { PortfolioCertificates } from './portfolio-certificates/portfolio-certificates';
import { PortfolioPublications } from './portfolio-publications/portfolio-publications';
import { PortfolioHome } from './portfolio-home/portfolio-home';

export const routes: Routes = [
  { path: '', component: PortfolioHome },
  { path: 'cv', component: PortfolioCv },
  { path: 'certificates', component: PortfolioCertificates },
  { path: 'publications', component: PortfolioPublications }

];
