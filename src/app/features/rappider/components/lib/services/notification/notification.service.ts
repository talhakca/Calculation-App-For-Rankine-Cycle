import { Injectable, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzNotificationService, NzNotificationDataOptions } from 'ng-zorro-antd/notification';

const DEFAULT_NOTIFICATION_PLACEMENT = 'bottomRight';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(
    private nzNotificationService: NzNotificationService,
    private translateService: TranslateService
  ) { }

  createNotification(type: string, title: string, content: string, options: NzNotificationDataOptions = {}) {
    this.nzNotificationService[type](
      this.translateService.instant(title),
      this.translateService.instant(content),
      { nzPlacement: DEFAULT_NOTIFICATION_PLACEMENT, ...options }
    );
  }

  createNotificationTemplate(template: TemplateRef<{}>, options: NzNotificationDataOptions = {}) {
    this.nzNotificationService.template(template, { nzPlacement: DEFAULT_NOTIFICATION_PLACEMENT, ...options });
  }

}
