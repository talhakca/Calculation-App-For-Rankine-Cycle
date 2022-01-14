import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* app-data-store state */
import { AppDataStoreModule } from './app-data-store/app-data-store.module';
/* router-data-store state */
import { RouterDataStoreModule } from './router-data-store/router-data-store.module';
/* project-data-store state */
import { ProjectDataStoreModule } from './project-data-store/project-data-store.module';

/* auth-data-store state */
import { AuthDataStoreModule } from './auth-data-store/auth-data-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    /* AppDataStore state */
    AppDataStoreModule,
    /* RouterDataStore state */
    RouterDataStoreModule,
    /* AuthDataStore state */
    AuthDataStoreModule,
    /* ProjectDataStore state */
    ProjectDataStoreModule,
    /* RouterDataStore state */
    RouterDataStoreModule,

    /* AuthDataStore state */
    AuthDataStoreModule,
  ],
  exports: [StoreModule, EffectsModule],
})
export class DataStoresModule { }
