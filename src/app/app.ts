import { Component } from '@angular/core';
import {Header} from './header/header';
import {BlogList} from './blog-list/blog-list';
import {Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, BlogList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-blog-app';
  
  showPosts = true;
  togglePosts(): void {
    this.showPosts = !this.showPosts;
  }
}
