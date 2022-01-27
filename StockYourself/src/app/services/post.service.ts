import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { User } from '../models/user';
import { FetchService } from './fetch.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Post[]

  constructor(private fetch:FetchService) { }

  async getAllPosts(): Promise<Post[]> {
   
    let resp = await fetch(this.fetch.url + 'posts/');
    if (resp.status === 200) {
      return await resp.json();
    }
    else {
      return this.post;
  }

  }

  async getPostsByPortfolioId(portfolioId: number): Promise<Post[]> {

    let resp = await fetch(this.fetch.url + "posts/" + portfolioId)

    if (resp.ok) {
      return await resp.json();
    } else {
        return this.post;
    }
  }

  async getAllPostsByCreator(creator: User): Promise<Post[]> {

    let resp = await fetch(this.fetch.url + "posts/" + creator)

    if (resp.ok) {
      return await resp.json();
    } else {
      return this.post;
  }
  }

  async updatePostByCreator(post: Post, creator: User): Promise<Post> {

    let resp = await fetch(this.fetch.url + "posts/")

    if (resp.ok) {
      return await resp.json();
    } else {
      return null;
  }

  }

}
