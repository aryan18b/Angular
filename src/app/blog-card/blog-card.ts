import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  @Input() title = '';
  @Input() body = ''
  @Input() likes = 0

  @Output() likesChange = new EventEmitter<number>(); 

  onLikePost(): void {
    this.likesChange.emit(this.likes + 1);
  }
}
