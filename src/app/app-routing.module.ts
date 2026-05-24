import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: BlogDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
