import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Greeting {
  getGreeting(name: string): string {
    return `Hello, ${name}!`;
  }
}
