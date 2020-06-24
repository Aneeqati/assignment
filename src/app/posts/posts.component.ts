import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = [];
  constructor(private postService:PostsService) { }

  getPosts(){
    this.postService.getPosts().subscribe((x) => {
      this.posts = x;
      console.log(this.posts);
    })
  }

  ngOnInit() {
    this.getPosts();
  }

}
