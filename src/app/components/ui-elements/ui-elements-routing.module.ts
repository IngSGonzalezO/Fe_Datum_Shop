import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { GridComponent } from './grid/grid.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { ShadowComponent } from './shadow/shadow.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { StateColorComponent } from './state-color/state-color.component';
import { StepsComponent } from './steps/steps.component';
import { TagNPillsComponent } from './tag-n-pills/tag-n-pills.component';
import { TypographyComponent } from './typography/typography.component';
import { BreadcrubDemoComponent } from './breadcrub-demo/breadcrub-demo.component';
import { AccordingComponent } from './according/according.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { PopoverComponent } from './popover/popover.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { BootstrapTabsComponent } from './tabs/bootstrap-tabs/bootstrap-tabs.component';
import { LineTabsComponent } from './tabs/line-tabs/line-tabs.component';
import { NavsComponent } from './navs/navs.component';
import { Timeline1Component } from '../bonus-ui/timeline/timeline1/timeline1.component';

var routingAnimation = localStorage.getItem('animate')

 const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: "Typography",
          breadcrumb: "Typography",
          animation: [routingAnimation]
        }
      },
      {
        path: 'avatars',
        component: AvatarsComponent,
        data: {
          title: "Avatars",
          breadcrumb: "Avatars",
          animation: [routingAnimation]
        }
      },
      {
        path: 'helper-classes',
        component: HelperClassesComponent,
        data: {
          title: "Helper Classes",
          breadcrumb: "Helper Classes",
          animation: [routingAnimation]
        }
      },
      {
        path: 'grid',
        component: GridComponent,
        data: {
          title: "Grid",
          breadcrumb: "Grid",
          animation: [routingAnimation]
        }
      },
      {
        path: 'tag-n-pills',
        component: TagNPillsComponent,
        data: {
          title: "Tag and Pills",
          breadcrumb: "Tag and Pills",
          animation: [routingAnimation]
        }
      },
      {
        path: 'spinner',
        component: SpinnersComponent,
        data: {
          title: "Spinner",
          breadcrumb: "Spinner",
          animation: [routingAnimation]
        }
      },
      {
        path: 'shadow',
        component: ShadowComponent,
        data: {
          title: "Shadow",
          breadcrumb: "Shadow",
          animation: [routingAnimation]
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: "List",
          breadcrumb: "List",
          animation: [routingAnimation]
        }
      },
      {
        path: 'ribbons',
        component: RibbonsComponent,
        data: {
          title: "Ribbons",
          breadcrumb: "Ribbons",
          animation: [routingAnimation]
        }
      },
      {
        path: 'steps',
        component: StepsComponent,
        data: {
          title: "Steps",
          breadcrumb: "Steps",
          animation: [routingAnimation]
        }
      },
      {
        path: 'breadcrumb',
        component: BreadcrubDemoComponent,
        data: {
          title: "Breadcrumb",
          breadcrumb: "Breadcrumb",
          animation: [routingAnimation]
        }
      },
      {
        path: 'according',
        component: AccordingComponent,
        data: {
          title: "According",
          breadcrumb: "According",
          animation: [routingAnimation]
        }
      },
      {
        path: 'dropdown',
        component: DropdownComponent,
        data: {
          title: "Dropdown",
          breadcrumb: "Dropdown",
          animation: [routingAnimation]
        }
      },
      {
        path: 'progress-bar',
        component: ProgressBarComponent,
        data: {
          title: "Progress Bar",
          breadcrumb: "Progress Bar",
          animation: [routingAnimation]
        }
      },
      {
        path: 'ui-modal',
        component: UiModalComponent,
        data: {
          title: "Modal",
          breadcrumb: "Modal",
          animation: [routingAnimation]
        }
      },
      {
        path: 'popover',
        component: PopoverComponent,
        data: {
          title: "Popover",
          breadcrumb: "Popover",
          animation: [routingAnimation]
        }
      },
      {
        path: 'tooltip',
        component: TooltipComponent,
        data: {
          title: "Tooltip",
          breadcrumb: "Tooltip",
          animation: [routingAnimation]
        }
      },
      {
        path: 'tabs',
        children : [
          {
            path: 'bootstrap-tabs',
            component: BootstrapTabsComponent,
            data: {
              title: "Bootstrap Tabs",
              breadcrumb: "Bootstrap Tabs",
              animation: [routingAnimation]
            }
          },
          {
            path: 'line-tabs',
            component: LineTabsComponent,
            data: {
              title: "Line Tabs",
              breadcrumb: "Line Tabs",
              animation: [routingAnimation]
            }
          }
        ]
      },
      {
        path: 'navs',
        component: NavsComponent,
        data: {
          title: "Navs",
          breadcrumb: "Navs",
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
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }
