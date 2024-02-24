import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mde-editors',
  templateUrl: './mde-editors.component.html',
  styleUrls: ['./mde-editors.component.scss']
})
export class MdeEditorsComponent implements OnInit {
  public htmlContent = '';

  constructor() { }
  ngOnInit(): void {
  }

}
