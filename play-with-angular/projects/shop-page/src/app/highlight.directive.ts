import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  defaultColor = '#fff';

  @Input('appHighlight')
  highlightColor = 'yellow';

  constructor(private ele: ElementRef) {
    console.log(this.ele);
  }

  ngOnInit() {
    // this.ele.nativeElement.addEventListener('mouseover', (e: MouseEvent) => {
    //   this.ele.nativeElement.style.backgroundColor = this.highlightColor;
    // });
    // this.ele.nativeElement.addEventListener('mouseout', (e: MouseEvent) => {
    //   this.ele.nativeElement.style.backgroundColor = this.defaultColor;
    // });
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.ele.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
