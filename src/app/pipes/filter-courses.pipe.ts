import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../models/course'

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: ICourse[], search: string): ICourse[] {
    if (search.length === 0) return courses
    return courses.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
  }

}
