import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss']
})
export class UiModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

 
  lmModal(content:any){
    const modalRef = this.modalService.open(content,{ size: 'lg' });
  }
  smModal(lmcontent:any){
    const modalRef = this.modalService.open(lmcontent,{ size: 'sm' });
  }
  xlModal(xlcontent:any){
    const modalRef = this.modalService.open(xlcontent,{ size: 'xl' });
  }
  openMdoModal(modContent:any){
    const modalRef = this.modalService.open(modContent);
  }
  openFatModal(fatContent:any){
    const modalRef = this.modalService.open(fatContent);
  }
  openGetBootstrapModal(getContent:any){
    const modalRef = this.modalService.open(getContent);
  }


}
