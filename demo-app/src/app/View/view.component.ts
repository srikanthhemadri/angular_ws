import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";
import { MedsDataService, IMedsData, IMedsStructure } from '../data.service'
import { DialogService } from '../DialogBox/dialog.service';

interface IDisplayDetails{
    field: string;
    alias: string;
    display: boolean;
}

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['../DialogBox/dialog.component.css']
})
export class ViewComponent{
    medsdata: IMedsStructure;
    displaydetails: Array<IDisplayDetails> = [];
    settings: boolean;
    deletes: Array<IMedsData> = [];
    @Input() searchtext: string;

    constructor(private _medsdataservice: MedsDataService, private _dialogservice: DialogService, private _router: Router) { 
        this.medsdata = _medsdataservice.medsdata;
        for (let index = 0; index < this.medsdata.fields.length; index++) {
            this.displaydetails.push({"field": this.medsdata.fields[index], "alias": this.medsdata.alias[index], "display": true});
        }
    }

    Update(item: IMedsData): void {
        this._router.navigate(['edit', item.id]);
    }

    ToggleSettings(): void {
        this.settings = !this.settings;
    }

    ChangeFields(item: IDisplayDetails): void {
        item.display = !item.display;
    }

    GetDeletes(feature: IMedsData, event: any){
        if (event.target.checked) {
            this.deletes.push(feature);
        } else {
            let index = this.deletes.indexOf(feature);
            if (index > -1) {
                this.deletes.splice(index, 1);
            }
        }
    }

    OnDelete(){
        this._medsdataservice.Delete(this.deletes);
    }
}