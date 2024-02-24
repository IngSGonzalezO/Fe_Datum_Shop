import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from '../modal/new-task/new-task.component';
import { TaskTagsComponent } from '../modal/task-tags/task-tags.component';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent implements OnInit {
  public open: boolean = false
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openNewTask(){
    const modalRef = this.modalService.open(NewTaskComponent, { size: 'lg' });
  }

  openTaskTag(){
    const modalRef = this.modalService.open(TaskTagsComponent, { size: 'lg' });
  }

  openMenu(){
    this.open = !this.open
  }
}
