/*
  Page ID: f24df519-22db-4f00-96d1-505a0cd58056
  Page Name: UserInputPage
  Page Slug: user-input
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as lodash from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/features/shared/sdk/models';
import { ProjectControllerService } from 'src/app/features/shared/sdk/services';
import { GetProject } from 'src/app/features/data-stores/project-data-store/state/project-data-store.actions';
import { InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputPageComponent implements OnInit, OnDestroy {
  /* Component ID: 93b7ef31-db2e-44ac-b4ab-720f31cad64e */
  RappiderEditFormComponent_0: any = {
    config: {
      validators: [{ name: 'name' }],
      items: [
        {
          type: 'number',
          title: 'Please Enter the Pressure at the Turbine Inlet(in kPa)',
          placeholder: 'P1',
          visible: 'true',
          index: '1',
          fieldName: 'p1'
        },
        {
          type: 'number',
          title: 'Please Enter the Temperature at the Turbine Inlet(in Degree Celsius)',
          placeholder: 'T1',
          visible: 'true',
          index: '1',
          fieldName: 't1'
        },
        {
          type: 'number',
          title: 'Please Enter the Pressure at the Condenser Inlet (in kPa)',
          placeholder: 'P2',
          visible: 'true',
          index: '1',
          fieldName: 'p2'
        }
      ],
      itemSettings: {
        labelComponentSize: { xs: 18 },
        inputComponentSize: { xs: 4 },
      },
      formLayout: 'horizontal',
      submitButton: { text: 'Calculate and Save', visible: true, size: 'large' },
      inputChangeReaction: 'default',
      formValueEmitMode: 'returnAllValues',
    }
  };

  projectId: string;
  variables: Record<string, unknown>;

  /* state subscriptions */
  subscriptions: Subscription[];

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute,
    private projectApi: ProjectControllerService
  ) { }

  ngOnInit(): void {
    this.getProjectIdFromUrl();
    this.subscribeToData();

  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToActiveProject()
    ];
  }

  subscribeToActiveProject() {
    return this.store.select(state => state.ProjectDataStore.projects).subscribe((projects: Project[]) => {
      this.variables = projects.find(project => project.id === this.projectId).variables;
    })
  }

  getProjectIdFromUrl() {
    this.projectId = this.activatedRoute.snapshot.params['projectId'];
  }

  onVariablesSubmit(variables) {
    console.log(variables);

    this.projectApi.updateById({ id: this.projectId, body: { variables: variables } }).subscribe(() => {
      this.store.dispatch(InitApp());
    })
  }
}
