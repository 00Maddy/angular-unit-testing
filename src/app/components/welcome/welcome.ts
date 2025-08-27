import { Component, OnInit } from '@angular/core';
import { Greeting } from '../../services/greeting';

@Component({
   selector: 'app-welcome',
   standalone: true,
  template: `<h1>{{ message }}</h1>`
})
export class Welcome implements OnInit {
message = '';

  constructor(private greetingService: Greeting) {}

  ngOnInit() {
    this.message = this.greetingService.getGreeting('Angular');
  }
}
