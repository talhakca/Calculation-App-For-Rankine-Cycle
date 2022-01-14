/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Project, 'id'>, schemaOptions: { title: 'NewProject', exclude: [ 'id' ] })
 */
export interface NewProject {
  createdBy?: string;
  createdById?: string;
  createdDate?: string;
  name: string;
  updatedBy?: string;
  updatedById?: string;
  updatedDate?: string;
  userId?: string;
  variables?: {
};

  [key: string]: any;
}
