/* eslint-disable @typescript-eslint/no-explicit-any */
import { CrudFormConfig } from '../edit-form/crud-form-config.interface';

export interface EditFormComponentConfig  {
    redirectUrl: any;
    config: CrudFormConfig;
    data: any;
    submitted: boolean;
}
