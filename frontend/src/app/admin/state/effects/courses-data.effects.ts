import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { courseCommands, courseDocuments } from '../actions/courses.actions';
import { map, switchMap } from 'rxjs';
import { CourseEntity } from '../reducers/courses.reducer';
@Injectable()
export class CoursesDataEffects {
  loadTheCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseCommands.load),
      switchMap(() =>
        this.client
          .get<{ data: CourseEntity[] }>(
            'http://localhost:1337/api/references/courses'
          )
          .pipe(map(({ data }) => courseDocuments.courses({ payload: data })))
      )
    );
  });
  // when we get the command to load the courses,
  // make an HTTP call, get the courses, and return
  // a courses document

  constructor(private actions$: Actions, private client: HttpClient) {}
}
