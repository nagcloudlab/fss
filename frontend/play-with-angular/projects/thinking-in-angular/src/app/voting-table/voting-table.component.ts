import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-voting-table',
  imports: [
    CommonModule
  ],
  templateUrl: './voting-table.component.html',
  styleUrl: './voting-table.component.css'
})
export class VotingTableComponent {

  @Input()
  lines:Array<any> = []

}
