import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCertificates } from './portfolio-certificates';

describe('PortfolioCertificates', () => {
  let component: PortfolioCertificates;
  let fixture: ComponentFixture<PortfolioCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCertificates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCertificates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
