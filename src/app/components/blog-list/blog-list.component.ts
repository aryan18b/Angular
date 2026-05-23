import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BehaviorSubject, catchError, delay, finalize, Observable, of } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  constructor(private blogService: BlogService) {}

  blogs: any[] = [
    /*
    dummy post objects
    // {
    //   title: 'Understanding Angular Directives',
    //   body: 'Angular directives are a powerful way to extend the functionality of HTML elements. In this post, we will explore the different types of directives and how to use them effectively in your Angular applications.'
    // },
    // {
    //   title: 'Getting Started with Angular Services',
    //   body: 'Angular services are a fundamental part of building scalable applications. They allow you to share data and functionality across components. In this post, we will cover the basics of creating and using services in Angular.'
    // },
    // {
    //   title: 'Angular Routing: A Comprehensive Guide',
    //   body: 'Routing is an essential feature of any single-page application. In this post, we will dive into Angular’s routing system, covering how to set up routes, navigate between them, and manage route parameters.'
    // }
    */
   ]

  blogs$!: Observable<any[]>;

  loading$ = new BehaviorSubject<boolean>(true);
  error$ = new BehaviorSubject<string | null>(null);

  searchText = ''

  showPosts = true;

  togglePosts() {
    this.showPosts = !this.showPosts;
  }

  ngOnInit(): void {
    this.blogs$ = this.blogService.getBlogs().pipe(
      delay(1000),
      catchError((err) => {
        console.log(err);
        this.error$.next('Failed to load posts');
        return of([]);
      }),
      finalize(() => this.loading$.next(false))
    );
  }

  get filteredBlogs() {
    return this.blogs.filter(blog => blog.title.toLowerCase().includes(this.searchText.trim().toLowerCase()));
  }

  loadBlogs() {
    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        console.log(this.blogs);
      },
      error: (err) => console.log(err)
    })
  }
}
