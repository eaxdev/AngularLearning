import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {SettingsComponent} from './settings/settings.component';
import {LessonEditorComponent} from './lesson-editor/lesson-editor.component';
import {LessonAddComponent} from './lesson-add/lesson-add.component';

const routes: Routes = [
  { path: 'lessons', component: LessonsListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'lessons/edit/:id', component: LessonEditorComponent },
  { path: 'lessons/add', component: LessonAddComponent },
  { path: '', pathMatch: 'full', redirectTo:  'lessons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
