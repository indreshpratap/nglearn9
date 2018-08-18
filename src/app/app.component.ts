import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nglearn9';
  current = new Date();
  cap = true;

  activated = false;
  profileMessage = 'Do you want to update your profile?';
  doOnYes(ev,o){
    console.log("Got yes event from child",ev,o);

    this.profileMessage = 'Confirmed';
  }
  doOnNo(ev){
    console.log("Got no event from child",ev);
   this.profileMessage = 'Not Confirmed';
  }
  doOnCancel(ev){
    console.log("Got CANCEL event from child",ev);
   this.profileMessage = 'Do you want to update your profile?';
  }
}
