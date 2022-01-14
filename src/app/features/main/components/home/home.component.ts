/*
  Page ID: 7bfd7fb1-8c62-4cca-9db9-0dbb8aa74963
  Page Name: HomePage
  Page Slug: home
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as lodash from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  /* Component ID: 93155969-d6c6-4516-8a83-0bd95dc6349a */
  RappiderListGridComponent_0: any = {
    config: {
      title: 'Projects',
      columnVisibilitySelectable: true,
      searchable: true,
      defaultSearchField: 'name',
      size: 'default',
      columns: [{ title: 'Project', fieldName: 'name', type: 'text' }],
      listActions: [
        {
          text: 'Create Project',
          buttonType: 'primary',
          behavior: 'EMIT'
        }
      ],
      itemActions: [
        {
          text: 'Go to Project',
          name: 'GO_TO_PROJECT',
          behavior: 'EMIT'
        },
      ]
    },
    loading: false,
  };

  projects: any[];
  isProjectsLoading = false;

  /* state subscriptions */
  subscriptions: Subscription[];

  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToProjects(),
      this.subscribeToProjectsLoading()
    ];
  }

  subscribeToProjects() {
    return this.store.select(state => state.ProjectDataStore.projects).subscribe(projects => {
      this.projects = projects;
    })
  }

  subscribeToProjectsLoading() {
    return this.store.select(state => state.ProjectDataStore.isLoading).subscribe((isProjectsLoading: boolean) => {
      this.isProjectsLoading = isProjectsLoading;
      console.log(this.isProjectsLoading);

    });
  }

  onClickNewProject() {
    this.router.navigateByUrl('create-project');
  }

  onProjectSelect(res) {
    this.router.navigateByUrl(`user-input/${res.data.id}`);

  }
}
