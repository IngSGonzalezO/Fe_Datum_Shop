import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: File[] = [];
  
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  constructor() { }
  ngOnInit(): void {
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

}
