import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstratorsComponent } from './demonstrators.component';

describe('DemonstratorsComponent', () => {
  let component: DemonstratorsComponent;
  let fixture: ComponentFixture<DemonstratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemonstratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemonstratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
