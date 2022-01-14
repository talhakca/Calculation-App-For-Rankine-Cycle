import { AlertActionConfig } from './alert-action-config.interface';
import { AlertTypes } from './alert-types';

export interface AlertConfig {
  type: AlertTypes;
  title: string;
  description: string;
  showIcon: boolean;
  closeable: boolean;
  actionSupported?: boolean;
  actionConfig?: AlertActionConfig;
}
