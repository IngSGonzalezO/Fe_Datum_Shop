import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import * as feather from 'feather-icons';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';
import { NavService } from 'src/app/shared/services/nav/nav.service';
import { slider } from '../../../data/animation/animation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [slider],
})

export class ContentComponent implements OnInit {

  constructor(
    public navServices: NavService,
    public layout: LayoutService,
    public route: ActivatedRoute,
    private cdref: ChangeDetectorRef
  ) {
    this.route.queryParams.subscribe((params) => {
      this.layout.config.settings.layout = params['layout']
        ? params['layout']
        : this.layout.config.settings.layout;
    });
  }

  ngOnInit(): void {}

  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  get layoutClass() {
    return (
      this.layout.config.settings.sidebar_type +
      ' ' +
      this.layout.config.settings.layout.replace('layout', 'sidebar')
    );
  }

  prepareRoute(outlet: RouterOutlet) {

    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  ngAfterViewInit() {
    this.cdref.detectChanges();
    feather.replace();
  }
}
