import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonSimpleComponent } from './coming-soon-simple/coming-soon-simple.component';
import { SimpleWithBgImgComponent } from './simple-with-bg-img/simple-with-bg-img.component';
import { SimpleWithBgVideoComponent } from './simple-with-bg-video/simple-with-bg-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ComingSoonSimpleComponent,
    SimpleWithBgImgComponent,
    SimpleWithBgVideoComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule,
    SharedModule

  ]
})
export class ComingSoonModule { }
