import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './dashboard/default/default.component';
import { ProfileGreetingComponent } from './dashboard/profile-greeting/profile-greeting.component';
import { IncomeCardComponent } from './dashboard/income-card/income-card.component';
import { ActivitySectionComponent } from './dashboard/activity-section/activity-section.component';
import { RecentOrderComponent } from './dashboard/recent-order/recent-order.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';
import { RecentOrdersComponent } from './dashboard/recent-orders/recent-orders.component';
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
    DefaultComponent,
    ProfileGreetingComponent,
    IncomeCardComponent,
    ActivitySectionComponent,
    RecentOrderComponent,
    RecentOrdersComponent,
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
