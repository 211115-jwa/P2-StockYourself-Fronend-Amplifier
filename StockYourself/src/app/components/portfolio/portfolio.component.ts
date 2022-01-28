import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() portfolio: Portfolio;
  posts:Post[];
  seePostFormat: boolean= false;

  constructor(private postServ: PostService, private userServ: UserService) { }

  ngOnInit(): void {
  }

  async viewPortfolioPosts() {
    this.posts = await this.postServ.getPostsByPortfolio(this.portfolio);
    
  }

   seePostTemplate(): void {
    this.seePostFormat = true;
  }
}

