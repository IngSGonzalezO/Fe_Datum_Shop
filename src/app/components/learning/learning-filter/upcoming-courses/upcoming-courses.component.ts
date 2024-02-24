import { Component, OnInit } from '@angular/core';
import * as filterData from '../../../../shared/data/learning/learning'

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {
  public isCollapsed = false;

  public upcomingCourses = filterData.upcomingCourses
  constructor() { }

  ngOnInit(): void {
  }

}
