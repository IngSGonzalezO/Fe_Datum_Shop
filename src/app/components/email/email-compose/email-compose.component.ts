import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.scss']
})
export class EmailComposeComponent implements OnInit {

  public editor: Editor;
  public html = '';
  public files: File[] = [];
  
  constructor() { }
  
  // add file
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  // remove file
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
