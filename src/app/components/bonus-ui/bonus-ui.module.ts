import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusUiRoutingModule } from './bonus-ui-routing.module';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { BootstrapNotifyComponent } from './bootstrap-notify/bootstrap-notify.component';
import { RatingComponent } from './rating/rating.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StepsComponent } from './steps/steps.component';
import { BreadcrumbUiComponent } from './breadcrumb-ui/breadcrumb-ui.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { StickyComponent } from './sticky/sticky.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { CreativeCardComponent } from './creative-card/creative-card.component';
import { TabbedCardComponent } from './tabbed-card/tabbed-card.component';
import { Timeline1Component } from './timeline/timeline1/timeline1.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HorizontalScrollComponent } from './scrollable/horizontal-scroll/horizontal-scroll.component';
import { AlwaysVisibleScrollComponent } from './scrollable/always-visible-scroll/always-visible-scroll.component';
import { VerticalScrollComponent } from './scrollable/vertical-scroll/vertical-scroll.component';
import { SelectComponent } from './bootstrap-notify/select/select.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from 'ngx-slider-v2';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaginationActiveDisabledComponent } from './pagination/pagination-active-disabled/pagination-active-disabled.component';
import { PaginationAlignmentComponent } from './pagination/pagination-alignment/pagination-alignment.component';
import { PaginationColorComponent } from './pagination/pagination-color/pagination-color.component';
import { PaginationIconsComponent } from './pagination/pagination-icons/pagination-icons.component';
import { PaginationSizingComponent } from './pagination/pagination-sizing/pagination-sizing.component';
import { PearlsStepStatesComponent } from './steps/pearls-step-states/pearls-step-states.component';
import { PearlsStepSizingComponent } from './steps/pearls-step-sizing/pearls-step-sizing.component';
import { PearlsStepIconComponent } from './steps/pearls-step-icon/pearls-step-icon.component';
import { DefaultPearlsStepsComponent } from './steps/default-pearls-steps/default-pearls-steps.component';
import { VerticalStepComponent } from './steps/vertical-step/vertical-step.component';
import { StepSizingComponent } from './steps/step-sizing/step-sizing.component';
import { StepStatesComponent } from './steps/step-states/step-states.component';
import { StepIconComponent } from './steps/step-icon/step-icon.component';
import { DefaultStepComponent } from './steps/default-step/default-step.component';
import { SimpleTabComponent } from './tabbed-card/simple-tab/simple-tab.component';
import { ColorTabComponent } from './tabbed-card/color-tab/color-tab.component';
import { ColorOptionComponent } from './tabbed-card/color-option/color-option.component';
import { MaterialTabColorComponent } from './tabbed-card/material-tab-color/material-tab-color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersModule } from '../users/users.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MouseWheelOwlComponent } from './owl-carousel/mouse-wheel-owl/mouse-wheel-owl.component';
import { AutoHeightOwlComponent } from './owl-carousel/auto-height-owl/auto-height-owl.component';
import { AutoPlayOwlComponent } from './owl-carousel/auto-play-owl/auto-play-owl.component';
import { AnimateOwlComponent } from './owl-carousel/animate-owl/animate-owl.component';
import { LazyLoadOwlComponent } from './owl-carousel/lazy-load-owl/lazy-load-owl.component';
import { RightToLeftOwlComponent } from './owl-carousel/right-to-left-owl/right-to-left-owl.component';
import { StagePaddingOwlComponent } from './owl-carousel/stage-padding-owl/stage-padding-owl.component';
import { EventsOwlComponent } from './owl-carousel/events-owl/events-owl.component';
import { NavigationsOwlComponent } from './owl-carousel/navigations-owl/navigations-owl.component';
import { AutoWidthOwlComponent } from './owl-carousel/auto-width-owl/auto-width-owl.component';
import { MergeOwlComponent } from './owl-carousel/merge-owl/merge-owl.component';
import { CenterOwlComponent } from './owl-carousel/center-owl/center-owl.component';
import { ResponsiveOwlComponent } from './owl-carousel/responsive-owl/responsive-owl.component';
import { BasicOwlComponent } from './owl-carousel/basic-owl/basic-owl.component';
import { ColorBreadcrumbComponent } from './breadcrumb-ui/color-breadcrumb/color-breadcrumb.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';

@NgModule({
  declarations: [
    ScrollableComponent,
    BootstrapNotifyComponent,
    RatingComponent,
    DropzoneComponent,
    Sweetalert2Component,
    OwlCarouselComponent,
    RibbonsComponent,
    PaginationComponent,
    StepsComponent,
    BreadcrumbUiComponent,
    ImageCropperComponent,
    StickyComponent,
    BasicCardComponent,
    CreativeCardComponent,
    TabbedCardComponent,
    Timeline1Component,
    HorizontalScrollComponent,
    AlwaysVisibleScrollComponent,
    VerticalScrollComponent,
    SelectComponent,
    RangeSliderComponent,

    PaginationActiveDisabledComponent,
    PaginationAlignmentComponent,
    PaginationColorComponent,
    PaginationIconsComponent,
    PaginationSizingComponent,
    PearlsStepStatesComponent,
    PearlsStepSizingComponent,
    PearlsStepIconComponent,
    DefaultPearlsStepsComponent,
    VerticalStepComponent,
    StepSizingComponent,
    StepStatesComponent,
    StepIconComponent,
    DefaultStepComponent,
    SimpleTabComponent,
    ColorTabComponent,
    ColorOptionComponent,
    MaterialTabColorComponent,
    BasicOwlComponent,
    ResponsiveOwlComponent,
    CenterOwlComponent,
    MergeOwlComponent,
    AutoWidthOwlComponent,
    NavigationsOwlComponent,
    EventsOwlComponent,
    StagePaddingOwlComponent,
    RightToLeftOwlComponent,
    LazyLoadOwlComponent,
    AnimateOwlComponent,
    AutoPlayOwlComponent,
    AutoHeightOwlComponent,
    MouseWheelOwlComponent,
    ColorBreadcrumbComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    BonusUiRoutingModule,
    BarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxDropzoneModule,
    NgbModule,
    CarouselModule,
    UsersModule,
    ImageCropperModule,
    NgxSliderModule

  ],
})
export class BonusUiModule { }
