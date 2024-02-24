import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertically',
  templateUrl: './vertically.component.html',
  styleUrls: ['./vertically.component.scss']
})
export class VerticallyComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  VerticallyCenteredModal(verticallyContent:any){
    const modalRef = this.modalService.open(verticallyContent);
  }
  ngOnInit(): void {
  }

}
