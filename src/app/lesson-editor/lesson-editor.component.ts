import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../shared/lesson.service';
import {Lesson} from '../shared/lesson.model';

@Component({
  selector: 'app-lesson-editor',
  templateUrl: './lesson-editor.component.html',
  styleUrls: ['./lesson-editor.component.css']
})
export class LessonEditorComponent implements OnInit {
  private lesson: Lesson;

  constructor(private currentRoute: ActivatedRoute, private service: LessonService) {
  }

  ngOnInit() {
    const id: number = parseInt(this.currentRoute.snapshot.paramMap.get('id'), 0);
    this.lesson = this.service.getById(id);
  }
}
