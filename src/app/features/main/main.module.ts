import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Internal Modules */
import { ComponentsModule } from '../rappider/components/lib/components.module';

/* Guards */
import { AuthGuard } from '../auth/guards';
/* HomePage Component */
import { HomePageComponent } from './components/home/home.component';
/* UserInputPage Component */
import { UserInputPageComponent } from './components/user-input/user-input.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { RappiderEditFormModule } from '../rappider/components';

const routes: Routes = [
  /* Home Page */
  {
    path: '',
    component: HomePageComponent,
    canActivate: [],
  },
  /* Pages */
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [],
  },
  {
    path: 'user-input/:projectId',
    component: UserInputPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  }
];

@NgModule({
  declarations: [HomePageComponent, UserInputPageComponent, CreateProjectComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule, NzSpinModule],
  exports: [],
})
export class mainModule { }
