import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { JobSearchComponent } from './job-search.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyComponent } from './apply/apply.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobApplyComponent } from './job-details/job-apply/job-apply.component';
import { ApplyFormComponent } from './apply/apply-form/apply-form.component';
import { PersonalDetailsComponent } from './apply/apply-form/personal-details/personal-details.component';
import { YourEducationComponent } from './apply/apply-form/your-education/your-education.component';
import { YourExperienceComponent } from './apply/apply-form/your-experience/your-experience.component';
import { UploadFileComponent } from './apply/apply-form/upload-file/upload-file.component';

@NgModule({
  declarations: [
    JobSearchComponent,
    ListViewComponent,
    CardsViewComponent,
    JobDetailsComponent,
    ApplyComponent,
    JobFilterComponent,
    JobApplyComponent,
    ApplyFormComponent,
    PersonalDetailsComponent,
    YourEducationComponent,
    YourExperienceComponent,
    UploadFileComponent,
  ],
  imports: [
    CommonModule,
    JobSearchRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class JobSearchModule { }
