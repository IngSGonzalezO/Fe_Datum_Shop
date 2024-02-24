import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../interface/product-list';
@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  listUser: Project[] | undefined;

  constructor(private http:HttpClient) { }
}
