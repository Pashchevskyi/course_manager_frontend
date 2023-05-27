import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {CoursesService} from '../../services/courses.service'
import {ModalService} from '../../services/modal.service'
import {courses} from '../../data/courses'

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(
    private courseService: CoursesService,
    private modalService: ModalService
  ) {
  }


  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    duration: new FormControl<number>(0),
    description: new FormControl<string>('', [Validators.minLength(0)]),
    duration_unit: new FormControl<string>('', [Validators.minLength(5)]),
    tutor: new FormControl<string>('', [Validators.minLength(0)])
  })

  get name() {
    return this.form.controls.name as FormControl
  }

  get description() {
    return this.form.controls.description as FormControl
  }

  get tutor() {
    return this.form.controls.tutor as FormControl
  }

  get duration() {
    return this.form.controls.duration as FormControl
  }

  get duration_unit() {
    return this.form.controls.duration_unit as FormControl
  }

  ngOnInit(): void {
  }

  submit() {
    this.courseService.create({
      id: courses[courses.length - 1].id++,
      name: this.form.value.name as string,
      duration: this.form.value.duration as number,
      description: this.form.value.description as string,
      duration_unit: this.form.value.duration_unit as string,
      tutor: this.form.value.tutor as string,
    })/*.subscribe(() => {*/
      this.modalService.close()
    /*})*/
  }

}
