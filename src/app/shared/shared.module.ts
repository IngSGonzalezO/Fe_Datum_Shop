import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CheckLayoutComponent } from './components/costomizer/check-layout/check-layout.component';
import { ColorPickerComponent } from './components/costomizer/color-picker/color-picker.component';
import { CostomizerComponent } from './components/costomizer/costomizer.component';
import { LayoutOptionComponent } from './components/costomizer/layout-option/layout-option.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookmarkComponent } from './components/header/bookmark/bookmark.component';
import { ChatComponent } from './components/header/chat/chat.component';
import { LanguagesComponent } from './components/header/languages/languages.component';
import { MaximizeComponent } from './components/header/maximize/maximize.component';
import { ModeComponent } from './components/header/mode/mode.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { SearchComponent } from './components/header/search/search.component';
import { FullComponent } from './components/layout/full/full.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserInfoComponent } from './components/sidebar/user-info/user-info.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { NavService } from './services/nav/nav.service';
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TapToTopComponent,
    FooterComponent,
    BookmarkComponent,
    NotificationComponent,
    MaximizeComponent,
    ModeComponent,
    CostomizerComponent,
    SearchComponent,
    ChatComponent,
    FeatherIconsComponent,
    UserInfoComponent,
    ColorPickerComponent,
    LayoutOptionComponent,
    CheckLayoutComponent,
    FullComponent,
    LoaderComponent,
    LanguagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule.forRoot(),
  ],
  providers: [NavService, ProductService, DecimalPipe],
  exports: [
    RouterModule,
    BreadcrumbComponent,
    TapToTopComponent,
    ContentComponent,
    FeatherIconsComponent,
    LoaderComponent,
    TranslateModule,
    NgbModule
  ],
})
export class SharedModule {}
