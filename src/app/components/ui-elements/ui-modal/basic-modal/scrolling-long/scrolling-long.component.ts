import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scrolling-long',
  templateUrl: './scrolling-long.component.html',
  styleUrls: ['./scrolling-long.component.scss']
})
export class ScrollingLongComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  scrollingModal(scrollingContent: any){
    const modalRef = this.modalService.open(scrollingContent);
  }

  ngOnInit(): void {
  }

}
