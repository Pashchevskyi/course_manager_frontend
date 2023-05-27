import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {CourseComponent} from './components/course/course.component'
import {HttpClientModule} from '@angular/common/http'
import {GlobalErrorComponent} from './components/global-error/global-error.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {FilterCoursesPipe} from './pipes/filter-courses.pipe'
import { SelectedCoursesPipe } from './pipes/selected-courses.pipe'
import {ModalComponent} from './components/modal/modal.component'
import {CreateCourseComponent} from './components/create-course/create-course.component'
import {FocusDirective} from './directives/focus.directive'
import {CoursePageComponent} from './pages/course-page/course-page.component'
import {AboutPageComponent} from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    GlobalErrorComponent,
    FilterCoursesPipe,
    SelectedCoursesPipe,
    ModalComponent,
    CreateCourseComponent,
    FocusDirective,
    CoursePageComponent,
    AboutPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
