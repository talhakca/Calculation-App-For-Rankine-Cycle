import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
/* reducer */
import * as fromProjectDataStore from './state/project-data-store.reducer';

/* effects */
import { ProjectDataStoreEffects } from './state/project-data-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* ProjectDataStore State */
    StoreModule.forFeature(
      fromProjectDataStore.featureKey,
      fromProjectDataStore.reducer,
      { initialState: fromProjectDataStore.initialState }
    ),
    EffectsModule.forFeature([ProjectDataStoreEffects]),
  ],
  exports: [StoreModule, EffectsModule],
})
export class ProjectDataStoreModule {}
