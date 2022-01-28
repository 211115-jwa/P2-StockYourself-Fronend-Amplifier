import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { Post } from '../models/post';
import { User } from '../models/user';
import { FetchService } from './fetch.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post[]

  constructor(private fetch:FetchService) { }
  authHeaders = {'Content-type':'application/json','Token':''};
  regHeaders = {'Content-type':'application/json'};

  async getAllPosts(): Promise<Post[]> {
   
    let resp = await fetch(this.fetch.url + 'post/all');
    if (resp.status === 200) {
      return await resp.json();
    }
    else {
      return this.post;
  }

  }

  async createPost(createdPost: Post): Promise<boolean> {
    this.authHeaders.Token = localStorage.getItem('Token');

    let resp = await fetch(this.fetch.url + 'post/create', {method:'POST', body:JSON.stringify(createdPost), 
      headers:this.authHeaders});
    if (resp.status === 201) {
      return true;
    } else {
      return false;
    }


  }


  async getPostsByPortfolio(portfolio: Portfolio): Promise<Post[]> {

    let resp = await fetch(this.fetch.url + portfolio.id + "/posts")

    if (resp.ok) {
      return await resp.json();
    } else {
        return this.post;
    }
  }

  async getAllPostsByCreator(creator: User): Promise<Post[]> {

    let resp = await fetch(this.fetch.url + creator.id + "/posts")

    if (resp.ok) {
      return await resp.json();
    } else {
      return this.post;
  }
  }

  async updatePostByCreator(post: Post, creator: User): Promise<boolean> {
    let credentials = {

    }
    
    this.authHeaders.Token = localStorage.getItem('Token');
    let resp = await fetch(this.fetch.url + post.postId + "/update", {method:'PUT', body:JSON.stringify(creator),
      headers:this.authHeaders});
    if (resp.status===200) return true;
    else return false;
  }

  }

}
