import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { VideoChatComponent } from './video-chat/video-chat.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat-app',
        component: ChatAppComponent,
        data: {
          title: "Chat App",
          breadcrumb: "Chat App",
          animation: [routingAnimation]
        }
       
      },
      {
        path: 'video-chat',
        component: VideoChatComponent,
        data: {
          title: "Video Chat",
          breadcrumb: "Video Chat",
          animation: [routingAnimation]
        }
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
