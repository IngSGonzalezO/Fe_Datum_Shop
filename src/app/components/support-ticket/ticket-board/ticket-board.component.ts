import { Component, OnInit } from '@angular/core';
import * as data from '../../../shared/data/support-ticket/support-ticket'

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.component.html',
  styleUrls: ['./ticket-board.component.scss']
})
export class TicketBoardComponent implements OnInit {

  public ticketListStatus = data.ticketListStatus 

  constructor() { }

  ngOnInit(): void {
  }

}
