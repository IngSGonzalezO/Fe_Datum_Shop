import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltips-popovers',
  templateUrl: './tooltips-popovers.component.html',
  styleUrls: ['./tooltips-popovers.component.scss']
})
export class TooltipsPopoversComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  tooltipsModal(tooltipContent:any){
    const modalRef = this.modalService.open(tooltipContent);
  }
  ngOnInit(): void {
  }

}
