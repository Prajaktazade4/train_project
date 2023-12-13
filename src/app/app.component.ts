import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trainProject';
  trainName = "Train Name:Ranikamlapati";
  avalTicket = 136;
  bookTicket(){
    {
      if(this.avalTicket!==0)
      this.avalTicket--;
    console.log('book Tickets', this.avalTicket);
    alert('Please Conform Your Tickets Booking');
    }
  }
  cancelTicket(){
    if(this.avalTicket!==0)
    this.avalTicket++;
  console.log('cancled Tickets', this.avalTicket);
  alert('Are You Sure Want to Canclled Tickets');
  }

  // bookTicket() {
  //   console.log('bookTicket')

  //   this.avalTicket--;
  // }


  // cancelTicket() {
  //   console.log('cancelTicket')

  //   this.avalTicket++;
  // }
}
