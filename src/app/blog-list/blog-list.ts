import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { FormsModule } from '@angular/forms';
import { BlogListService } from './blog-list.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  imports: [BlogCard, FormsModule, CommonModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList implements OnInit, OnDestroy{
  constructor(
    private blogListService: BlogListService,
    private cdr: ChangeDetectorRef
  ){}
  searchText = '';

  // get filteredPosts() {
  //   return this.posts.filter(post => post.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));
  // }

  filterPosts(posts: any[]): any[] {
    if (!this.searchText.trim()) {
      return posts;
    }

    return posts.filter(post => post.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));
  }

  intervalId?: number;
  posts$!: Observable<any[]>;
  filteredPosts$!: Observable<any[]>;

  onPostLike(title: string): void {
    alert(`${title} liked`);
  }

  ngOnInit(): void {
    console.log("component initialized");
    // this.loadPosts();
    this.posts$ = this.blogListService.getPosts();
  }

  ngOnDestroy(): void {
    console.log("cleaning up...component destroyed");
  }

  // loadPosts(): void{
  //   this.blogListService.getPosts().subscribe({
  //     next: (data) => {
  //       this.posts = data;
  //       this.cdr.detectChanges();
  //       console.log(this.posts);
  //     },
  //     error: (err) => {
  //       console.error('Failed to fetch posts', err);
  //     }
  //   });
  // }
}
