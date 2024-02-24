import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { AvatarsComponent } from './avatars/avatars.component';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { GridComponent } from './grid/grid.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { ListComponent } from './list/list.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { ShadowComponent } from './shadow/shadow.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { StateColorComponent } from './state-color/state-color.component';
import { StepsComponent } from './steps/steps.component';
import { TagNPillsComponent } from './tag-n-pills/tag-n-pills.component';
import { TypographyComponent } from './typography/typography.component';
import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { CommonAvatarsComponent } from './avatars/common-avatars/common-avatars.component';
import { GroupsComponent } from './avatars/groups/groups.component';
import { BreadcrubDemoComponent } from './breadcrub-demo/breadcrub-demo.component';
import { GridOptionsComponent } from './grid/grid-options/grid-options.component';
import { GridColumnComponent } from './grid/grid-column/grid-column.component';
import { GridSettingComponent } from './grid/grid-setting/grid-setting.component';
import { GridVerticalComponent } from './grid/grid-vertical/grid-vertical.component';
import { GridHorizontalComponent } from './grid/grid-horizontal/grid-horizontal.component';
import { GridNestingComponent } from './grid/grid-nesting/grid-nesting.component';
import { GridOrderComponent } from './grid/grid-order/grid-order.component';
import { GridOffsetComponent } from './grid/grid-offset/grid-offset.component';
import { CommonHelperClassComponent } from './helper-classes/common-helper-class/common-helper-class.component';
import { DefaultListComponent } from './list/default-list/default-list.component';
import { BtnListComponent } from './list/btn-list/btn-list.component';
import { FlushStyleComponent } from './list/flush-style/flush-style.component';
import { ClassListComponent } from './list/class-list/class-list.component';
import { WithBadgesComponent } from './list/with-badges/with-badges.component';
import { CustomListComponent } from './list/custom-list/custom-list.component';
import { JsListComponent } from './list/js-list/js-list.component';
import { IconListComponent } from './list/icon-list/icon-list.component';
import { ImgListComponent } from './list/img-list/img-list.component';
import { RoundedImgListComponent } from './list/rounded-img-list/rounded-img-list.component';

import { DisplayHeadingComponent } from './typography/display-heading/display-heading.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { ListingTypographyComponent } from './typography/listing-typography/listing-typography.component';
import { BlockquotesComponent } from './typography/blockquotes/blockquotes.component';
import { TextElementsComponent } from './typography/text-elements/text-elements.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { PopoverComponent } from './popover/popover.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordingComponent } from './according/according.component';
import { BootstrapTabsComponent } from './tabs/bootstrap-tabs/bootstrap-tabs.component';
import { LineTabsComponent } from './tabs/line-tabs/line-tabs.component';
import { BasicAccordionComponent } from './according/basic-accordion/basic-accordion.component';
import { DropdownBottomComponentComponent } from './dropdown/dropdown-bottom-component/dropdown-bottom-component.component';

import { BarsAnimatedComponent } from './progress-bar/bars-animated/bars-animated.component';
import { BarsStripedComponent } from './progress-bar/bars-striped/bars-striped.component';
import { MultipleBarsComponent } from './progress-bar/multiple-bars/multiple-bars.component';
import { ProgressBarsComponent } from './progress-bar/progress-bars/progress-bars.component';
import { BasicModalComponent } from './ui-modal/basic-modal/basic-modal.component';
import { StaticExampleComponent } from './ui-modal/static-example/static-example.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialStyleRightTabComponent } from './tabs/line-tabs/material-style-right-tab/material-style-right-tab.component';
import { MaterialStyleLeftTabComponent } from './tabs/line-tabs/material-style-left-tab/material-style-left-tab.component';
import { ColorTabsComponent } from './tabs/line-tabs/color-tabs/color-tabs.component';
import { StyleRightTabComponent } from './tabs/line-tabs/style-right-tab/style-right-tab.component';
import { StyleLeftTabComponent } from './tabs/line-tabs/style-left-tab/style-left-tab.component';
import { SimpleStyleBottomTabComponent } from './tabs/line-tabs/simple-style-bottom-tab/simple-style-bottom-tab.component';
import { SimpleMaterialStyleComponent } from './tabs/line-tabs/simple-material-style/simple-material-style.component';
import { PrimaryColorComponent } from './tabs/bootstrap-tabs/primary-color/primary-color.component';
import { TabsWithIconComponent } from './tabs/bootstrap-tabs/tabs-with-icon/tabs-with-icon.component';
import { PillDarkColorComponent } from './tabs/bootstrap-tabs/pill-dark-color/pill-dark-color.component';
import { PillTabsComponent } from './tabs/bootstrap-tabs/pill-tabs/pill-tabs.component';
import { PillTabsWithIconComponent } from './tabs/bootstrap-tabs/pill-tabs-with-icon/pill-tabs-with-icon.component';
import { TabsButtonLeftAlignComponent } from './tabs/bootstrap-tabs/tabs-button-left-align/tabs-button-left-align.component';
import { TabsRightAlignComponent } from './tabs/bootstrap-tabs/tabs-right-align/tabs-right-align.component';
import { TabsVerticalComponent } from './tabs/bootstrap-tabs/tabs-vertical/tabs-vertical.component';
import { BasicTabsComponent } from './tabs/bootstrap-tabs/basic-tabs/basic-tabs.component';
import { NavsComponent } from './navs/navs.component';
import { DefaultNavComponent } from './navs/default-nav/default-nav.component';
import { ItemBulletsComponent } from './navs/item-bullets/item-bullets.component';
import { SectionSeparatorComponent } from './navs/section-separator/section-separator.component';
import { ActiveDisabledLinkComponent } from './navs/active-disabled-link/active-disabled-link.component';
import { InlineNavComponent } from './navs/inline-nav/inline-nav.component';
import { SubNavComponent } from './navs/sub-nav/sub-nav.component';
import { BordersColorComponent } from './helper-classes/borders-color/borders-color.component';
import { BorderWidthComponent } from './helper-classes/border-width/border-width.component';
import { PositionComponent } from './helper-classes/position/position.component';
import { ButtonOutlineComponent } from './helper-classes/button-outline/button-outline.component';
import { SimpleComponent } from './ui-modal/basic-modal/simple/simple.component';
import { ScrollingLongComponent } from './ui-modal/basic-modal/scrolling-long/scrolling-long.component';
import { VerticallyComponent } from './ui-modal/basic-modal/vertically/vertically.component';
import { TooltipsPopoversComponent } from './ui-modal/basic-modal/tooltips-popovers/tooltips-popovers.component';
import { UsingGridComponent } from './ui-modal/basic-modal/using-grid/using-grid.component';
import { OpenAtOneTimeComponent } from './according/open-at-one-time/open-at-one-time.component';
import { TogglePanelsComponent } from './according/toggle-panels/toggle-panels.component';
import { CollapseAccordionComponent } from './according/collapse-accordion/collapse-accordion.component';
@NgModule({
  declarations: [
    StateColorComponent,
    TypographyComponent,
    AvatarsComponent,
    HelperClassesComponent,
    GridComponent,
    TagNPillsComponent,
    SpinnersComponent,
    ShadowComponent,
    ListComponent,
    RibbonsComponent,
    StepsComponent,
    CommonAvatarsComponent,
    GroupsComponent,
    BreadcrubDemoComponent,
    GridOptionsComponent,
    GridColumnComponent,
    GridSettingComponent,
    GridVerticalComponent,
    GridHorizontalComponent,
    GridNestingComponent,
    GridOrderComponent,
    GridOffsetComponent,
    CommonHelperClassComponent,
    DefaultListComponent,
    BtnListComponent,
    FlushStyleComponent,
    ClassListComponent,
    WithBadgesComponent,
    CustomListComponent,
    JsListComponent,
    IconListComponent,
    ImgListComponent,
    RoundedImgListComponent,

    DisplayHeadingComponent,
    HeadingsComponent,
    ListingTypographyComponent,
    BlockquotesComponent,
    TextElementsComponent,
    ProgressBarComponent,
    UiModalComponent,
    PopoverComponent,
    TooltipComponent,
    DropdownComponent,
    AccordingComponent,
    BootstrapTabsComponent,
    LineTabsComponent,
    BasicAccordionComponent,
    DropdownBottomComponentComponent,
    BarsAnimatedComponent,
    BarsStripedComponent,
    BarsStripedComponent,
    MultipleBarsComponent,
    ProgressBarsComponent,
    BasicModalComponent,
    StaticExampleComponent,
    BasicModalComponent,
    TabsComponent,
    SimpleMaterialStyleComponent,
    SimpleStyleBottomTabComponent,
    StyleLeftTabComponent,
    StyleRightTabComponent,
    ColorTabsComponent,
    MaterialStyleLeftTabComponent,
    MaterialStyleRightTabComponent,
    TextElementsComponent,
    BootstrapTabsComponent,
    PrimaryColorComponent,
    TabsWithIconComponent,
    PillDarkColorComponent,
    PillTabsComponent,
    PillTabsWithIconComponent,
    TabsButtonLeftAlignComponent,
    TabsRightAlignComponent,
    TabsVerticalComponent,
    TabsWithIconComponent,
    BasicTabsComponent,
    NavsComponent,
    DefaultNavComponent,
    ItemBulletsComponent,
    SectionSeparatorComponent,
    ActiveDisabledLinkComponent,
    InlineNavComponent,
    SubNavComponent,
    BordersColorComponent,
    BorderWidthComponent,
    PositionComponent,
    ButtonOutlineComponent,
    SimpleComponent,
    ScrollingLongComponent,
    VerticallyComponent,
    TooltipsPopoversComponent,
    UsingGridComponent,
    OpenAtOneTimeComponent,
    CollapseAccordionComponent,
    TogglePanelsComponent
    ],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    SharedModule,
    // TabsModule.forRoot()
  ]
})
export class UiElementsModule { }
