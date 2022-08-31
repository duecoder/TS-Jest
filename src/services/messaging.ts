import { MessagingProtocol } from '../classes/interfaces/msg-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Received:', msg);
  }
}
