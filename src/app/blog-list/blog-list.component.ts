import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  posts = [
    {
      title: 'Understanding Angular Directives',
      body: 'Angular directives are a powerful way to extend the functionality of HTML elements. In this post, we will explore the different types of directives and how to use them effectively in your Angular applications.'
    },
    {
      title: 'Getting Started with Angular Services',
      body: 'Angular services are a fundamental part of building scalable applications. They allow you to share data and functionality across components. In this post, we will cover the basics of creating and using services in Angular.'
    },
    {
      title: 'Angular Routing: A Comprehensive Guide',
      body: 'Routing is an essential feature of any single-page application. In this post, we will dive into Angular’s routing system, covering how to set up routes, navigate between them, and manage route parameters.'
    }
  ]

  searchText = ''

  showPosts = true;

  togglePosts() {
    this.showPosts = !this.showPosts;
  }

  ngOnInit(): void {
    console.log("component Created");
  }

  get filteredPosts() {
    return this.posts.filter(post => post.title.toLowerCase().includes(this.searchText.trim().toLowerCase()));
  }
}
