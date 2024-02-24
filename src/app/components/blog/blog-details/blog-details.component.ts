import { Component, OnInit } from '@angular/core';
import * as blog from '../../../shared/data/blog/blog'
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  public BlogData = blog.BlogData
  public BlogSid = blog.BlogData
  public blog: any = []
  constructor() {
    this.blog = this.BlogSid.slice(0,2)
   }

  ngOnInit(): void {
  }

}
