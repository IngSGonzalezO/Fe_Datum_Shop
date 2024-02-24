import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-using-grid',
  templateUrl: './using-grid.component.html',
  styleUrls: ['./using-grid.component.scss']
})
export class UsingGridComponent implements OnInit {

  constructor(public modalService:NgbModal) { }

  gridModal(gridContent:any){
    const modalRef = this.modalService.open(gridContent);
  }
  ngOnInit(): void {
  }

}
