import { Component, OnInit } from '@angular/core';
import { DialogService, IDialogDetails } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  dialogdetails: IDialogDetails;

  constructor(private _dialogservice: DialogService) {
    this.dialogdetails = _dialogservice.dialogdetails;
  }

  OnCloseClick(): void {
    this.dialogdetails.show = false;
  }
}