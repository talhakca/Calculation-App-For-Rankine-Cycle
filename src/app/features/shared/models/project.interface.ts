// import { Categories } from 'src/app/features/shared/models';

import { User } from ".";

export interface Project {
  users?: User[];
  id?: string;
  name?: string;
  createdDate: Date;
  createdBy: string;
  createdById: string;
  updatedDate: Date;
  updatedBy: string;
  updatedById: string;
}
