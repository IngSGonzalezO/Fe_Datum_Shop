import { Component } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-ngx-editors',
  templateUrl: './ngx-editors.component.html',
  styleUrl: './ngx-editors.component.scss'
})

export class NgxEditorsComponent {

  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
