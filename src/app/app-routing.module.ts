import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CoursePageComponent} from './pages/course-page/course-page.component'
import {AboutPageComponent} from './pages/about-page/about-page.component'

const routes: Routes = [
  { path: '', component: CoursePageComponent },
  { path: 'about', component: AboutPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
