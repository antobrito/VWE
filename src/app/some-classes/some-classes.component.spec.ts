import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeClassesComponent } from './some-classes.component';

describe('SomeClassesComponent', () => {
  let component: SomeClassesComponent;
  let fixture: ComponentFixture<SomeClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
