import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import {ICourse} from '../models/course'
import {ErrorService} from './error.service'
import { courses as coursesWithoutServer } from '../data/courses'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  courses: ICourse[] = []


  getAll(): ICourse[] {
    this.courses = coursesWithoutServer
    return this.courses
  }

  create(course: ICourse): ICourse {
    let newLength: number = this.courses.push(course)
    return this.courses[newLength - 1];
  }


  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
