import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { CoursesFeatureEffects } from './state/effects/feature.effects';
import { CoursesDataEffects } from './state/effects/courses-data.effects';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    HttpClientModule,
    EffectsModule.forFeature([CoursesFeatureEffects, CoursesDataEffects]),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
