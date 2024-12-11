import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-voting-item',
  imports: [],
  templateUrl: './voting-item.component.html',
  styleUrl: './voting-item.component.css'
})
export class VotingItemComponent {

  @Input()
  item:string="Unknown";

  @Output()
  vote:EventEmitter<any>=new EventEmitter(); // stream

  handleLikeVote(event:MouseEvent){
    this.vote.emit({
      item:this.item,
      voteType:'like'
    })
  }

  handleDislikeVote(event:MouseEvent){
    this.vote.emit({
      item:this.item,
      voteType:'dislike'
    })
  }

}
