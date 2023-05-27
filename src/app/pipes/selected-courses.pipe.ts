import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../models/course'

@Pipe({
  name: 'selectedCourses'
})
export class SelectedCoursesPipe implements PipeTransform {

  transform(courses: ICourse[], selectedCourses: boolean): ICourse[] {
    if (selectedCourses == false) {
      return courses
    }
    return courses.filter(function (c: ICourse) {
      let courseItem: string|null = localStorage.getItem('course' + c.id)
      let strCourse:string = (courseItem != null && courseItem != "") ? courseItem :
       '{"id": -1, "name": "", "description": "", "tutor": "", "duration":0, "duration_unit": "hours"}'
       let course: ICourse = JSON.parse(strCourse)
       
       return course.id === c.id
    })
  }

}
