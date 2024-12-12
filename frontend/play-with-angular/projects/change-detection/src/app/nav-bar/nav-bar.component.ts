import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  currentUser: string = 'Guest';

  constructor(private cd: ChangeDetectorRef) {}

  @Input()
  userStream!: BehaviorSubject<any>;

  ngOnInit() {
    this.cd.detach();
    this.userStream.subscribe({
      next: (user) => {
        if (user !== 'Guest') {
          this.currentUser = user;
          this.cd.reattach();
        } else {
          this.currentUser = user;
          this.cd.detectChanges();
          this.cd.detach();
        }
      },
    });
  }
}
