import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe-pipe';

@Component({
  selector: 'app-portfolio-certificates',
  imports: [CommonModule, SafePipe],
  templateUrl: './portfolio-certificates.html',
  styleUrl: './portfolio-certificates.css'
})
export class PortfolioCertificates {
  currentType: 'education' | 'work' = 'education';
  currentCert: 'bachelor' | 'master' | 'english' | 'german' = 'bachelor';
  currentWorkCert: 'company1' | 'company2' = 'company1';

  bachelorCertUrl = 'assets/certificates/studies/Amare_Biruk_Bachelor_Certificate.pdf';
  masterCertUrl = 'assets/certificates/studies/Amare_Biruk_Master_Certificate.pdf';
  englishCertUrl = 'assets/certificates/studies/Amare_Biruk_English.pdf';
  germanCertUrl = 'assets/certificates/studies/Amare_Biruk_Deutsch_B1_Zertifikat.pdf';

  company1CertUrl = 'assets/certificates/references/Amare_Biruk_Fricke.pdf';
  company2CertUrl = 'assets/certificates/references/Amare_Biruk_Noerdliche.pdf';

  showEducation() {
    this.currentType = 'education';
  }
  showWork() {
    this.currentType = 'work';
  }
  showBachelor() {
    this.currentCert = 'bachelor';
  }
  showMaster() {
    this.currentCert = 'master';
  }
  showEnglish() {
    this.currentCert = 'english';
  }
  showGerman() {
    this.currentCert = 'german';
  }
  showWorkCert(cert: 'company1' | 'company2') {
    this.currentWorkCert = cert;
  }
}
