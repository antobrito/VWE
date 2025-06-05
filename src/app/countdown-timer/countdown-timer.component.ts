import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
})
export class CountdownTimerComponent implements AfterViewInit {
  date: any;
  now: any;
  targetDate: any = new Date(2025, 11, 1); // Mes 11 = diciembre
  targetTime: number = this.targetDate.getTime();
  difference: number = 0;

  months: string[] = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  currentTime: string = `${this.months[this.targetDate.getMonth()]} ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

  ngAfterViewInit(): void {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      const daysValue = Math.floor(this.difference);

      if (!isNaN(daysValue)) {
        this.days.nativeElement.innerText = daysValue;
      } else {
        this.days.nativeElement.innerHTML = "<img src='https://i.gifer.com/VAyR.gif' />";
      }
    }, 1000);
  }

  tickTock(): void {
    this.date = new Date();
    this.now = this.date.getTime();

    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }
}
