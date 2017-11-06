import {Injectable} from '@angular/core';
import {Lesson} from './lesson.model';

@Injectable()
export class LessonService {

  data: Lesson[] = [
    {id: 1, name: 'Lesson 1', completed: false},
    {id: 2, name: 'Lesson 2', completed: true},
    {id: 3, name: 'Lesson 3', completed: false},
    {id: 4, name: 'Lesson 4', completed: true},
    {id: 5, name: 'Lesson 5', completed: true},
    {id: 6, name: 'Lesson 6', completed: false},
    {id: 7, name: 'Lesson 7', completed: false},
    {id: 8, name: 'Lesson 8', completed: true}
  ];

  getAll(): Lesson[] {
    return this.data;
  }

  getById(id: number): Lesson {
    return this.data.find(x => x.id == id);
  }

  update(lesson: Lesson) {
    const toUpdate = this.getById(lesson.id);
    Object.assign(toUpdate, lesson);
  }

  create(lesson: Lesson) {
    this.data.push(lesson);
  }

  delete(lesson: Lesson) {
    const toDelete = this.getById(lesson.id);
    this.data.splice(this.data.indexOf(lesson), 1);
  }
}
