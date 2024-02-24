import { Component, OnInit } from '@angular/core';
import * as data from '../../../../shared/data/ui-kits/typography '

@Component({
  selector: 'app-blockquotes',
  templateUrl: './blockquotes.component.html',
  styleUrls: ['./blockquotes.component.scss']
})
export class BlockquotesComponent implements OnInit {

  blockquotes = data.blockquotes
  constructor() { }

  ngOnInit(): void {
  }

}
