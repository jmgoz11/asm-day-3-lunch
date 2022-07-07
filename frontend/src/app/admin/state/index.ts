import { ActionReducerMap } from '@ngrx/store';

export const FEATURE_NAME = 'Admin Feature';

import * as fromCourses from './reducers/courses.reducer';
export interface AdminState {
  courses: fromCourses.CoursesState;
}

export const reducers: ActionReducerMap<AdminState> = {
  courses: fromCourses.reducer,
};
