import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'app-costomizer',
  templateUrl: './costomizer.component.html',
  styleUrls: ['./costomizer.component.scss']
})
export class CostomizerComponent implements OnInit {
  public customizer: string = '';
  public sidebarType: string = 'compact-wrapper';
  public screenwidth: any = window.innerWidth;
  public layoutType: string = 'ltr';
  public primary_color: string = '#6362E7';
  public secondary_color: string = '#FFC500';

  constructor(private modalService: NgbModal, public layout:LayoutService) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenwidth = event.target.innerWidth;
  }

  openModal(popup: any) {
    this.modalService.open(popup, { backdropClass: 'dark-modal', centered: true });
  }

  Customizer(val: any) {
    this.customizer = val;
  }
  
  applyColor() {
    document.documentElement.style.setProperty('--theme-default', this.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
  }

  customizeSidebarType(val: any) {
    this.sidebarType = val;
  }

copyText(data: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }  
}
