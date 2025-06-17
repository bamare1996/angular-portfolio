import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPublications } from './portfolio-publications';

describe('PortfolioPublications', () => {
  let component: PortfolioPublications;
  let fixture: ComponentFixture<PortfolioPublications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPublications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPublications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
