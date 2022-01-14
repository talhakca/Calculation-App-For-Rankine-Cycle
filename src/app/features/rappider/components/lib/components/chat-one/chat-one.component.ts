import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { ChatMessage } from '../../utils/chat/chat-message.interface';
import { MessageSenderType } from '../../utils/chat/message-sender-type.enum';
import { InputGroupComponentConfig } from '../../utils/input-group/input-group-component-config.interface';

@Component({
  selector: 'rappider-chat-one',
  templateUrl: './chat-one.component.html',
  styleUrls: ['./chat-one.component.scss']
})
export class RappiderChatOneComponent {
  /* message interface */
  @Input() items: ChatMessage[];
  /* card description */
  @Input() description: string;
  @Input() inputGroup: InputGroupComponentConfig;

  MessageSenderType = MessageSenderType;

}
