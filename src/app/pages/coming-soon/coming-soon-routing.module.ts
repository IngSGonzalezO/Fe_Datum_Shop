import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonSimpleComponent } from './coming-soon-simple/coming-soon-simple.component';
import { SimpleWithBgImgComponent } from './simple-with-bg-img/simple-with-bg-img.component';
import { SimpleWithBgVideoComponent } from './simple-with-bg-video/simple-with-bg-video.component';

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'coming-soon-simple',
        component: ComingSoonSimpleComponent
      },
      {
        path: 'simple-with-bg-img',
        component: SimpleWithBgImgComponent
      },
      {
        path: 'simple-with-bg-video',
        component: SimpleWithBgVideoComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }
