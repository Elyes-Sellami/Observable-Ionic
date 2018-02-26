import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsyncPipe } from '@angular/common';
import { MessageserviceProvider } from '../../providers/messageservice/messageservice';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Sms } from './entities/Sms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//  messageList =[];
  messages : Observable<any>;
  constructor(private messageService: MessageserviceProvider) {

this.getMessages();
  }

  getMessages(){
     this.messageService.getMessages().subscribe(data =>this.messages = data); // Subscibe Method

     
   // this.messages = this.messageService.getMessages();    // pipe async method ---> add |async in html
  }

}
