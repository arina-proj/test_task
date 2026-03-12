import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css'],
})
export class WelcomeComponent implements OnInit {
  currentTime: Date = new Date();
  private timeSubscription!: Subscription;

  ngOnInit() {
    this.timeSubscription = interval(1000).subscribe(() => (this.currentTime = new Date()));
  }

  ngOnDestroy() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  getGreeting(): string {
    const hours = this.currentTime.getHours();
    if (hours < 12) return 'Доброе утро';
    if (hours < 18) return 'Добрый день';
    return 'Добрый вечер';
  }
}
