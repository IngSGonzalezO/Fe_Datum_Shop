import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { BootstrapNotifyComponent } from './bootstrap-notify/bootstrap-notify.component';
import { BreadcrumbUiComponent } from './breadcrumb-ui/breadcrumb-ui.component';
import { CreativeCardComponent } from './creative-card/creative-card.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RatingComponent } from './rating/rating.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { StepsComponent } from './steps/steps.component';
import { StickyComponent } from './sticky/sticky.component';
import { Sweetalert2Component } from './sweetalert2/sweetalert2.component';
import { TabbedCardComponent } from './tabbed-card/tabbed-card.component';
import { Timeline1Component } from './timeline/timeline1/timeline1.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'scrollable',
        component: ScrollableComponent ,
        data: {
          title: "Scrollable",
          breadcrumb: "scrollable",
          animation: [routingAnimation]
        }
      },
      {
        path: 'bootstrap-notify',
        component: BootstrapNotifyComponent ,
        data: {
          title: "Bootstrap Notify",
          breadcrumb: "Bootstrap Notify",
          animation: [routingAnimation]
        }
      },
      {
        path: 'rating',
        component: RatingComponent ,
        data: {
          title: "Rating",
          breadcrumb: "Rating",
          animation: [routingAnimation]
        }
      },
      {
        path: 'dropzone',
        component: DropzoneComponent ,
        data: {
          title: "Dropzone",
          breadcrumb: "Dropzone",
          animation: [routingAnimation]
        }
      },
      {
        path: 'scrollable',
        component: ScrollableComponent ,
        data: {
          title: "Scrollable",
          breadcrumb: "Scrollable",
          animation: [routingAnimation]
        }
      },
      {
        path: 'owl-carousel',
        component: OwlCarouselComponent ,
        data: {
          title: "Owl carousel",
          breadcrumb: "Owl carousel",
          animation: [routingAnimation]
        }
      },
      {
        path: 'ribbons',
        component: RibbonsComponent ,
        data: {
          title: "Ribbons",
          breadcrumb: "Ribbons",
          animation: [routingAnimation]
        }
      },
      {
        path: 'pagination',
        component: PaginationComponent ,
        data: {
          title: "Pagination",
          breadcrumb: "Pagination",
          animation: [routingAnimation]
        }
      },
      {
        path: 'steps',
        component: StepsComponent ,
        data: {
          title: "Steps",
          breadcrumb: "Steps",
          animation: [routingAnimation]
        }
      },
      {
        path: 'image-cropper',
        component: ImageCropperComponent ,
        data: {
          title: "Image Cropper",
          breadcrumb: "Image Cropper",
          animation: [routingAnimation]
        }
      },

      {
        path: 'sweetalert2',
        component: Sweetalert2Component ,
        data: {
          title: "Sweetalert2",
          breadcrumb: "Sweetalert2",
          animation: [routingAnimation]
        }
      },
      {
        path: 'sticky',
        component: StickyComponent ,
        data: {
          title: "Sticky",
          breadcrumb: "Sticky",
          animation: [routingAnimation]
        }
      },
      {
        path: 'basic-card',
        component: BasicCardComponent ,
        data: {
          title: "Basic Card",
          breadcrumb: "Basic Card",
          animation: [routingAnimation]
        }
      },
      {
        path: 'creative-card',
        component: CreativeCardComponent ,
        data: {
          title: "Creative Card",
          breadcrumb: "Creative Card",
          animation: [routingAnimation]
        }
      },
      {
        path: 'tabbed-card',
        component: TabbedCardComponent ,
        data: {
          title: "Tabbed Card",
          breadcrumb: "Tabbed Card",
          animation: [routingAnimation]
        }
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent ,
        data: {
          title: "Range Slider",
          breadcrumb: "Range Slider",
          animation: [routingAnimation]
        }
      },
      {
        path: 'breadcrumb-ui',
        component: BreadcrumbUiComponent ,
        data: {
          title: "Breadcrumb Ui",
          breadcrumb: "Breadcrumb Ui",
          animation: [routingAnimation]
        }
      },
      {
        path: 'timeline1',
        component: Timeline1Component,
        data: {
        title: "Timeline",
        breadcrumb: "Timeline",
          animation: [routingAnimation]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonusUiRoutingModule { }
