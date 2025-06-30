import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioCertificates } from './portfolio-certificates';
import { SafePipe } from '../safe-pipe';

describe('PortfolioCertificates', () => {
  let component: PortfolioCertificates;
  let fixture: ComponentFixture<PortfolioCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCertificates],
      declarations: [PortfolioCertificates, SafePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCertificates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should default to education view with bachelor certificate', () => {
    expect(component.currentType).toBe('education');
    expect(component.currentCert).toBe('bachelor');
  });

  it('should switch to master certificate', () => {
    component.showMaster();
    expect(component.currentCert).toBe('master');
    expect(component.masterCertUrl).toContain('Master_Certificate.pdf');
  });

  it('should switch to German language certificate', () => {
    component.showGerman();
    expect(component.currentCert).toBe('german');
    expect(component.germanCertUrl).toContain('Deutsch_B1_Zertifikat.pdf');
  });

  it('should switch to work view', () => {
    component.showWork();
    expect(component.currentType).toBe('work');
  });

  it('should switch default to company1 work certificate', () => {
    component.showWork();
    expect(component.currentWorkCert).toBe('company1');
    expect(component.company1CertUrl).toContain('Noerdliche.pdf');
  })
  
  it('should switch to company2 work certificate', () => {
    component.showWorkCert('company2');
    expect(component.currentWorkCert).toBe('company2');
    expect(component.company2CertUrl).toContain('Noerdliche.pdf');
  });
  */
});
