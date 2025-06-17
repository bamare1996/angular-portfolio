import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe-pipe';

@Component({
  selector: 'app-portfolio-publications',
  imports: [CommonModule, SafePipe],
  templateUrl: './portfolio-publications.html',
  styleUrl: './portfolio-publications.css'
})
export class PortfolioPublications {
  currentPub: 'bachelor' | 'master' | 'other' = 'bachelor';

  bachelorPubUrl = 'assets/publications/thesis/Amare_Biruk_Bachelor_Thesis.pdf';
  masterPubUrl = 'assets/publications/thesis/Amare_Biruk_Master_Thesis.pdf';

  otherPubs = [
    {
      title: 'Publication Title 1',
      url: 'assets/publications/publication1.pdf'
    },
    {
      title: 'Publication Title 2',
      url: 'assets/publications/publication2.pdf'
    }
    // Add more as needed
  ];

  showBachelor() {
    this.currentPub = 'bachelor';
  }

  showMaster() {
    this.currentPub = 'master';
  }

  showOther() {
    this.currentPub = 'other';
  }
}
