import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
})
export class ReviewFormComponent {
  isOpen = false;
  fg!: FormGroup;
  @Output()
  newRev = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.fg = this.fb.group({
      author: ['Nag'],
      stars: [5],
      body: [''],
    });
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleSubmit() {
    //console.log(this.fg.value);
    this.newRev.emit(this.fg.value);
    this.fg.reset();
    this.isOpen = false;
  }
}
