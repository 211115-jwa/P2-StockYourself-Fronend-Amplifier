import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   posts: Post[];

  constructor(private postServ: PostService) { }

  async ngOnInit(): Promise <void> {
    this.posts = await this.postServ.getAllPosts();
  }

}
