import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @Input() portfolio: Portfolio;
  posts:Post[];

  constructor(private postServ: PostService) { }

  ngOnInit(): void {
  }

  async viewPortfolioPosts() {
    this.posts = await this.postServ.getPostsByPortfolioId(this.portfolio.id);
    
  }

}

