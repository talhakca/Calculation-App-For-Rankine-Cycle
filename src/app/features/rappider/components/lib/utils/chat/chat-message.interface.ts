import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';
import { MessageSenderType } from './message-sender-type.enum';

export interface ChatMessage {
  senderType: MessageSenderType;
  avatar: AvatarComponentConfig;
  name: string;
  message: string;
  time: string;
}
