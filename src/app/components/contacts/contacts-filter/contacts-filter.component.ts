import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewContactComponent } from '../new-contact/new-contact.component';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.scss']
})
export class ContactsFilterComponent implements OnInit {
  public type : any;
  public open : boolean = false;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openMenu(){
    this.open = !this.open
  }

  openNewContact(){
    const modalRef = this.modalService.open(NewContactComponent, { size: 'lg' });
  }

}

