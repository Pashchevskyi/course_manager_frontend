import {Component, Input} from '@angular/core'
import {ICourse} from '../../models/course'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
})
export class CourseComponent {
  @Input() course: ICourse


  details = false
  areYouRegistered = false
  isCourseSelected = false

  selectCourse() {
    localStorage.setItem('course' + this.course.id, JSON.stringify(this.course))
    this.isCourseSelected = true
  }

  deselectCourse() {
    let key = 'course' + this.course.id
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key)
    }
    this.isCourseSelected = false
  }

}
