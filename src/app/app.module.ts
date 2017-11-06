import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { SettingsComponent } from './settings/settings.component';
import {LessonService} from './shared/lesson.service';
import { LessonEditorComponent } from './lesson-editor/lesson-editor.component';
import { LessonAddComponent } from './lesson-add/lesson-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsListComponent,
    SettingsComponent,
    LessonEditorComponent,
    LessonAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
