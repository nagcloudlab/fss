import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VotingBoxComponent} from './voting-box/voting-box.component';

@Component({
  selector: 'app-root',
  imports: [
    VotingBoxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thinking-in-angular';
}
