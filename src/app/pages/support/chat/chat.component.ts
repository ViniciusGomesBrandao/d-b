import { Component, ElementRef, ViewChild } from '@angular/core';
import { messages } from '../../apps/chat/chat-data';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  sidePanelOpened = true;
  msg = '';

  // MESSAGE
  selectedMessage: any;

  public messages: Array<any> = messages;
  // tslint:disable-next-line - Disables all
  // messages: Object[] = messages;

  constructor() {
    this.selectedMessage = this.messages[0];
  }

  @ViewChild('myInput', { static: true }) myInput: ElementRef =
    Object.create(null);

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  // tslint:disable-next-line - Disables all
  onSelect(message: Object[]): void {
    this.selectedMessage = message;
  }

  OnAddMsg(): void {
    this.msg = this.myInput.nativeElement.value;

    if (this.msg !== '') {
      this.selectedMessage.chat.push({
        type: 'even',
        msg: this.msg,
        date: new Date(),
      });
    }

    this.myInput.nativeElement.value = '';
  }
}
