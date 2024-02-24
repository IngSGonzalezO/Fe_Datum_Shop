import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupportTicketService } from 'src/app/shared/services/support-ticket/support-ticket.service';
import { NgbdSortableHeader2 } from 'src/app/shared/directives/sor-table.directive';
import { TicketBoardComponent } from './ticket-board/ticket-board.component';

@NgModule({
  declarations: [SupportTicketComponent,NgbdSortableHeader2, TicketBoardComponent],
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    SupportTicketService
  ]
})
export class SupportTicketModule {  }
