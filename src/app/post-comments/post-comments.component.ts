import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  comments = [];
  searchComments = [];
  searchTerm = null;
  search = false;
  constructor(private postService:PostsService, private route:ActivatedRoute) { }

  getPostComments(){
    var id = this.route.snapshot.paramMap.get("id");
    this.postService.getPostComment(id).subscribe((x) => {
      this.comments = x;
      console.log(this.comments);
    })
  }

  searchComment(){
    var search = this.searchTerm;
    this.searchComments = this.comments.filter(x => Object.keys(x).some(function(k){
      if(k == 'name' || k == 'email'){
        return x[k] === search;
      }
      if(k == 'body'){
        return x[k].indexOf(search) != -1;
      }
    }));
    if(this.searchComments.length > 0){
      this.search = true;
    }
    // this.searchComments = this.comments.filter(x => x.name == this.searchTerm);
    // console.log("term", this.searchTerm);
    // console.log("comment", this.comments);
    // if(this.searchComments.length == 0){
    //   this.searchComments = this.comments.filter(x => x.body == this.searchTerm);
      
    //   if(this.searchComments.length > 0){
    //     alert("hello");
    //     this.search = true;
    //   }
    // }else{
    //   this.search = true;
    // }
    // if(this.searchComments.length == 0){
    //   this.searchComments = this.comments.filter(x => x.email == this.searchTerm);
    //   if(this.searchComments.length > 0){
    //     this.search = true;
    //   }
    // }else{
    //   this.search = true;
    // }
    
  }

  ngOnInit() {
    this.getPostComments();
  }

}
