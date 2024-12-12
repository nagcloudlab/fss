import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-user-view',
  imports: [],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UserViewComponent {
  @Input() user: any = {};

  constructor(private cd: ChangeDetectorRef) {}

  ngDoCheck() {
    console.log('UserViewComponent: ngDoCheck');
    this.cd.detectChanges();
  }
}
