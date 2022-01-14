import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateProject } from 'src/app/features/data-stores/project-data-store/state/project-data-store.actions';
import { Project } from 'src/app/features/shared/sdk/models';
import { createProjectConfig } from './utils/create-project-config';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  createProjectFormConfig = createProjectConfig;
  isFormValid = false;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(project: Project) {
    if (this.isFormValid) {
      this.store.dispatch(CreateProject({ payload: { project: project } }));
    }
  }

  onValidityChange(validity: boolean) {
    this.isFormValid = validity;
  }
}
