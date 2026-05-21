import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-list',
  imports: [BlogCard, FormsModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList implements OnInit, OnDestroy{
  searchText = '';

  filteredPosts() {
    return this.posts.filter(post => post.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));
  }
  intervalId?: number;
  posts = [
    {
      id: 1,
      title: 'First Post',
      body: 'This is the first post',
      likes: 7
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'This is the second post',
      likes: 5
    },
    { id: 3,
      title: 'Third Post',
      body: 'This is the third post',
      likes: 9
    },

  ];
  
  onPostLike(title: string): void {
    alert(`${title} liked`);
  }

  ngOnInit(): void {
    console.log("component initialized");
    this.intervalId = setInterval(() => console.log("Fetching posts"), 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log("cleaning up...component destroyed");
  }

}
