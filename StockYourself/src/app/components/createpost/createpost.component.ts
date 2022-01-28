import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  @Input() newPost: Post;
  message:String = '';

  constructor(private userServ:UserService, private postServ: PostService) { }

  ngOnInit(): void {
  }

  async createPost() {
    if(this.userServ.loggedInUser) {
      let createdPost = await this.postServ.createPost(this.newPost);
      if (createdPost) {
        return this.message = 'Thanks for your opinion';
      } else {
        return this.message = 'Error'
      }
      
    } else {
      return this.message = 'You are not logged in. Log in down below.';
    }

  }

}
