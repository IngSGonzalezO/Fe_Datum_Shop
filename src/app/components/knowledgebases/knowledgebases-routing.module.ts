import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeCategoryComponent } from './knowledge-category/knowledge-category.component';
import { KnowledgeDetailComponent } from './knowledge-detail/knowledge-detail.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'knowledgebase',
        component: KnowledgebaseComponent,
        data: {
          title: 'Knowledgebase',
          breadcrumb: 'Knowledgebase',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'knowledge-category',
        component: KnowledgeCategoryComponent,
        data: {
          title: 'Knowledge Category',
          breadcrumb: 'Knowledge Category',
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'knowledge-detail',
        component: KnowledgeDetailComponent,
        data: {
          title: 'Knowledge Detail',
          breadcrumb: 'Knowledge Detail',
          animation: [routingAnimation]
        }
       
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgebasesRoutingModule { }
