import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './components/welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'testingSample';
}
