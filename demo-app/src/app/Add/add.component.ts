import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MedsDataService, IMedsData, IMedsStructure } from '../data.service'

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html'
})
export class AddComponent {
    medsdata: Array<IMedsData>;
    feature: IMedsData = {} as IMedsData;

    constructor(private _medsdataservice: MedsDataService, private _route: Router) { 
        this.medsdata = _medsdataservice.medsdata.data;
    }

    OnAddition(feature: IMedsData): void {
        /* Write Code to Update the details */
        feature.id = this.medsdata[this.medsdata.length-1].id + 1;
        this._medsdataservice.Add(feature);
        this._route.navigate(['']);
    }

    OnClose(): void {
        this._route.navigate(['']);
    }
}