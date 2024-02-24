import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-manager-sidebar',
  templateUrl: './file-manager-sidebar.component.html',
  styleUrls: ['./file-manager-sidebar.component.scss']
})
export class FileManagerSidebarComponent implements OnInit {
  OpenFilter: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }
}
