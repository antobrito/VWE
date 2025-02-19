import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTabComponent } from './event-tab.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('EventTabComponent', () => {
  let component: EventTabComponent;
  let fixture: ComponentFixture<EventTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
