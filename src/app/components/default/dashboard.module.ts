import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EcommerceComponent } from './ecommerce/ecommerce/ecommerce.component';
import { InvoiceOverviewComponent } from './ecommerce/invoice-overview/invoice-overview.component';
import { TopDealerComponent } from './ecommerce/top-dealer/top-dealer.component';
import { TopSellingComponent } from './ecommerce/top-selling/top-selling.component';
import { OurTargetComponent } from './ecommerce/our-target/our-target.component';
import { ActivityComponent } from './ecommerce/activity/activity.component';
import { YearlyGrowthComponent } from './ecommerce/yearly-growth/yearly-growth.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopSellingChartComponent } from './ecommerce/top-selling-chart/top-selling-chart.component';

@NgModule({
  declarations: [
    EcommerceComponent,
    InvoiceOverviewComponent,
    TopDealerComponent,
    TopSellingComponent,
    OurTargetComponent,
    ActivityComponent,
    YearlyGrowthComponent,
    TopSellingChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule,
    NgApexchartsModule,
    ChartistModule,
    NgChartsModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class DashboardModule { }
