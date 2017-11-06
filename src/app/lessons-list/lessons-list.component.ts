import { Component, OnInit } from '@angular/core';
import {LessonService} from '../shared/lesson.service';
import {Lesson} from '../shared/lesson.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  private lessons: Lesson[];

  constructor(private service: LessonService, private router: Router) { }

  ngOnInit() {
    this.lessons = this.service.getAll();
  }

  onEdit(lesson: Lesson) {
    this.router.navigate(['lessons', 'edit', lesson.id]);
  }

  onCreate() {
    console.log('dastard');
    this.router.navigate(['lessons', 'add']);
  }

  onDelete(lesson: Lesson) {
    this.service.delete(lesson);
  }
}
