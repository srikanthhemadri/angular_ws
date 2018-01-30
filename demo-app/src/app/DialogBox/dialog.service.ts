import { Injectable } from '@angular/core';

export interface IDialogDetails{
    title: string;
    body: string;
    footer: string;
    show: boolean;
}

@Injectable()
export class DialogService{
    dialogdetails: IDialogDetails = {
        "title" : "Alert",
        "body" : "This is the body of the dialog box",
        "footer" : "footer",
        "show" : false
    };

    ShowDialog(){
        this.dialogdetails.show = true;
    }

    HideDialog(){
        this.dialogdetails.show = false;
    }
}