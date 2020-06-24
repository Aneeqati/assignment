import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';


const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'postcomments/:id', component: PostCommentsComponent},
  { path: '',   
    redirectTo: '/posts', 
    pathMatch: 'full' 
  }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
