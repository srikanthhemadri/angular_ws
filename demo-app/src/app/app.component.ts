import { Component, OnInit, OnChanges } from '@angular/core';
import { DialogService } from './DialogBox/dialog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ph: boolean = false;
  title = 'Pharmacy Demo';
  search: string;
  constructor(private _dialogservice: DialogService) { }

  // Alerted(state: boolean): void{
  //   console.log(state);
  //   this.ph = state;
  // }

}
