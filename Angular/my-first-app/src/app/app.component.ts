import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
    `]
})
export class AppComponent {
  userName = ""
  nameIsEmpty = false;

  onUpdateUserName(event: Event) {
    if(this.userName != "") {
      this.nameIsEmpty = true;
    } else {
      this.nameIsEmpty = false;
    }
    this.userName = (<HTMLInputElement>event.target).value;
}

}
