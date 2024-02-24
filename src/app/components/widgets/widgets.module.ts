import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import {  IndexComponent } from './general/index/index.component';
import { ChartIndexComponent } from './chart/chart-index/chart-index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalenderComponent } from './general/calender/calender.component';
import { ClockComponent } from './general/clock/clock.component';
import { WeatherComponent } from './general/weather/weather.component';
import { WidgetsJoinsComponent } from './general/widgets-joins/widgets-joins.component';
import { TestimonialComponent } from './general/testimonial/testimonial.component';
import { ActivityComponent } from './general/activity/activity.component';
import { ProfileDetailsComponent } from './general/profile-details/profile-details.component';
import { SocialWidgetComponent } from './general/social-widget/social-widget.component';
import { BrowserWidgetComponent } from './general/browser-widget/browser-widget.component';
import { ProductCartComponent } from './general/product-cart/product-cart.component';
import { EmployeeStatusComponent } from './general/employee-status/employee-status.component';
import { HeightEqualComponent } from './general/height-equal/height-equal.component';
import { EarningDataComponent } from './general/earning-data/earning-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartWidgetsComponent } from './chart/chart-widgets/chart-widgets.component';
import { MarketingExpenseComponent } from './chart/marketing-expense/marketing-expense.component';
import { TotalEarningComponent } from './chart/total-earning/total-earning.component';
import { LiveProductComponent } from './chart/live-product/live-product.component';
import { TurnoverComponent } from './chart/turnover/turnover.component';
import { MonthlySalesComponent } from './chart/monthly-sales/monthly-sales.component';
import { UsesComponent } from './chart/uses/uses.component';
import { BrowserUserComponent } from './chart/browser-user/browser-user.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonChartComponent } from './chart/chart-widgets/common-chart/common-chart.component';

@NgModule({
  declarations: [
    IndexComponent,
    IndexComponent,
    ChartIndexComponent,
    CalenderComponent,
    ClockComponent,
    WeatherComponent,
    WidgetsJoinsComponent,
    TestimonialComponent,
    ActivityComponent,
    ProfileDetailsComponent,
    SocialWidgetComponent,
    BrowserWidgetComponent,
    ProductCartComponent,
    EmployeeStatusComponent,
    HeightEqualComponent,
    EarningDataComponent,
    ChartWidgetsComponent,
    MarketingExpenseComponent,
    TotalEarningComponent,
    LiveProductComponent,
    TurnoverComponent,
    MonthlySalesComponent,
    UsesComponent,
    BrowserUserComponent,
    CommonChartComponent,
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule,
    NgApexchartsModule,
    NgbModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class WidgetsModule { }
