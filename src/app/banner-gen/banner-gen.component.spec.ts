import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGenComponent } from './banner-gen.component';

describe('BannerGenComponent', () => {
  let component: BannerGenComponent;
  let fixture: ComponentFixture<BannerGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerGenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
