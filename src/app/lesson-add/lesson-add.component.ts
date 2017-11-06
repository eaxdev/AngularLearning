import {Component, OnInit} from '@angular/core';
import {LessonService} from '../shared/lesson.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.css']
})
export class LessonAddComponent implements OnInit {

  private newLesson: any = {};

  constructor(private router: Router, private service: LessonService) {
  }

  ngOnInit() {
  }

  create() {
    this.service.create(this.newLesson);
    this.returnToHome();
  }

  cancelNewLesson() {
    this.returnToHome();
  }

  returnToHome() {
    this.router.navigate(['lessons']);
  }
}
