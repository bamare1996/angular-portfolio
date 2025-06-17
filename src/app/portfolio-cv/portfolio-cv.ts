import { Component } from '@angular/core';
import { SafePipe } from '../safe-pipe';

@Component({
  selector: 'app-portfolio-cv',
  imports: [SafePipe],
  templateUrl: './portfolio-cv.html',
  styleUrl: './portfolio-cv.css'
})
export class PortfolioCv {
  name = 'Biruk Amare';
  title = 'Software Developer / Engineer';
  email = 'birukwossene@gmail.com';
  phone = '+4915259868563';

  cvUrlGerman = 'assets/resume/german/AmareBirukLebenslauf.pdf';
  cvUrlEnglish = 'assets/resume/english/AmareBirukCV.pdf';

  currentCv: 'de' | 'en' = 'de';

  get cvUrl() {
    return this.currentCv === 'de' ? this.cvUrlGerman : this.cvUrlEnglish;
  }

  showGerman() {
    this.currentCv = 'de';
  }

  showEnglish() {
    this.currentCv = 'en';
  }
}