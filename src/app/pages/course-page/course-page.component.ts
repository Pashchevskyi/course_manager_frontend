import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../services/courses.service'
import {ModalService} from '../../services/modal.service'

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  title = 'angular app'
  // courses: ICourse[] = []
  loading = false
  // courses$: Observable<ICourse[]>
  term = ''
  name = ''
  showFilteredOnly = false

  constructor(
    public coursesService: CoursesService,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.courses$ = this.coursesService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.coursesService.getAll()/*.subscribe(() => {
      this.loading = false
    })*/
  }
}
