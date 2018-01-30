import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MedsDataService, IMedsData, IMedsStructure } from '../data.service'

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
    id: number;
    medsdata: Array<IMedsData>;
    feature: IMedsData;

    constructor(private _medsdataservice: MedsDataService, private _aroute: ActivatedRoute,
                private _route: Router) { 
        this.medsdata = _medsdataservice.medsdata.data;
        this._aroute.params.subscribe( params => console.log(params) );
    }

    ngOnInit(){
        this._aroute.params.forEach((params: Params) => {
            this.feature = this.medsdata.find(s => s.id == params['id']);
        });
    }

    OnUpdate(feature: IMedsData): void {
        /* Write Code to Update the details */
        this._medsdataservice.Update(feature);
        this._route.navigate(['']);
    }

    OnClose(): void {

    }
}