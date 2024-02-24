import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  simpleModal(simpleContent:any){
    const modalRef = this.modalService.open(simpleContent);
  }

  ngOnInit(): void {
  }
}
