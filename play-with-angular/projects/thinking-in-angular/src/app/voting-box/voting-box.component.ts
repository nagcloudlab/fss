import { Component } from '@angular/core';
import {VotingItemComponent} from '../voting-item/voting-item.component';
import {VotingTableComponent} from '../voting-table/voting-table.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-voting-box',
  imports: [
    VotingItemComponent,
    VotingTableComponent,
    CommonModule
  ],
  templateUrl: './voting-box.component.html',
  styleUrl: './voting-box.component.css'
})
export class VotingBoxComponent {

  votingLines:Array<any> = [
    {item: "Item-1", likes: 0, dislikes: 0},
    {item: "Item-2", likes: 0, dislikes: 0},
    {item: "Item-3", likes: 0, dislikes: 0},
    {item: "Item-4", likes: 0, dislikes: 0},
    {item: "Item-5", likes: 0, dislikes: 0},
    {item: "Item-6", likes: 0, dislikes: 0},
  ];

  handleVote(event:any){
    let {item, voteType} = event;
    this.votingLines = this.votingLines.map((line)=>{
      if(line.name === item){
        if(voteType === 'like'){
          line.likes++;
        }else{
          line.dislikes++;
        }
      }
      return line;
    });

  }

}
