import { Injectable } from '@angular/core';

export interface IMedsData {
    id: number;
    Name: string;
    Manufacturer: string;
    Batch_No: string;
    Expiration_Date: string;
    Price: string;
    Type: string;
}

export interface IMedsStructure {
    fields: string[];
    alias: string[];
    data: Array<IMedsData>;
}

@Injectable()
export class MedsDataService {
    temp: IMedsData;
    Update(feature: IMedsData){
        this.temp = this.medsdata.data.find(x => x.id == feature.id);
        this.temp.Batch_No = feature.Batch_No;
        this.temp.Expiration_Date = feature.Expiration_Date;
        this.temp.Manufacturer = feature.Manufacturer;
        this.temp.Name = feature.Name;
        this.temp.Price = feature.Price;
        this.temp.Type = feature.Type;
    }
    Add(feature: IMedsData){
        this.medsdata.data.push(feature);
    }
    Delete(features: Array<IMedsData>){
        this.medsdata.data = this.medsdata.data.filter(function( el ) {
            return !features.includes( el );
          } );
    }
    medsdata: IMedsStructure = {
        "fields": [ "id", "Name", "Manufacturer", "Batch_No", "Expiration_Date", "Price", "Type" ],
        "alias": [ "ID", "Name", "Manufacturer", "Batch Number", "Expiration Date", "Price", "Type" ],
        "data": [
            {
                "id": 1,
                "Name": "Wingscale",
                "Manufacturer": "Nelco Laboratories, Inc.",
                "Batch_No": "36987-3437",
                "Expiration_Date": "05/17/2019",
                "Price": "708.80",
                "Type": "CAPSULE"
            },
            {
                "id": 2,
                "Name": "GNP Medicated Wipes",
                "Manufacturer": "Amerisource Bergen",
                "Batch_No": "46122-055",
                "Expiration_Date": "07/09/2018",
                "Price": "166.60",
                "Type": "CAPSULE"
            },
            {
                "id": 3,
                "Name": "EDECRIN",
                "Manufacturer": "Aton Pharma, Inc.",
                "Batch_No": "25010-215",
                "Expiration_Date": "08/12/2017",
                "Price": "45.69",
                "Type": "CAPSULE"
            },
            {
                "id": 4,
                "Name": "Triadine Scrub",
                "Manufacturer": "Triad Group",
                "Batch_No": "50730-8304",
                "Expiration_Date": "12/20/2018",
                "Price": "313.75",
                "Type": "CAPSULE"
            },
            {
                "id": 5,
                "Name": "Castellani Paint",
                "Manufacturer": "Pedinol Pharmacal, Inc.",
                "Batch_No": "0884-2993",
                "Expiration_Date": "10/05/2021",
                "Price": "16.45",
                "Type": "CAPSULE"
            },
            {
                "id": 6,
                "Name": "Skin Eruptions Cough",
                "Manufacturer": "Natural Health Supply",
                "Batch_No": "64117-134",
                "Expiration_Date": "04/29/2019",
                "Price": "229.21",
                "Type": "CAPSULE"
            },
            {
                "id": 7,
                "Name": "Lipen 40 (Number 55)",
                "Manufacturer": "Paramesh Banerji Life Sciences LLC",
                "Batch_No": "69152-0055",
                "Expiration_Date": "04/25/2021",
                "Price": "153.68",
                "Type": "CAPSULE"
            },
            {
                "id": 8,
                "Name": "Amoxicillin",
                "Manufacturer": "Rebel Distributors Corp.",
                "Batch_No": "21695-314",
                "Expiration_Date": "03/19/2019",
                "Price": "945.35",
                "Type": "CAPSULE"
            },
            {
                "id": 9,
                "Name": "Olay Total Effects CC Tone Correcting",
                "Manufacturer": "Procter & Gamble Manufacturing Company",
                "Batch_No": "37000-353",
                "Expiration_Date": "01/24/2018",
                "Price": "867.12",
                "Type": "CAPSULE"
            },
            {
                "id": 10,
                "Name": "Tolazamide",
                "Manufacturer": "Mylan Pharmaceuticals Inc.",
                "Batch_No": "0378-0551",
                "Expiration_Date": "06/12/2018",
                "Price": "987.93",
                "Type": "CAPSULE"
            },
            {
                "id": 11,
                "Name": "SERTRALINE HYDROCHLORIDE",
                "Manufacturer": "Cardinal Health",
                "Batch_No": "55154-0527",
                "Expiration_Date": "06/18/2020",
                "Price": "193.07",
                "Type": "CAPSULE"
            },
            {
                "id": 12,
                "Name": "Toviaz",
                "Manufacturer": "Pfizer Laboratories Div Pfizer Inc",
                "Batch_No": "0069-0242",
                "Expiration_Date": "08/18/2019",
                "Price": "624.84",
                "Type": "CAPSULE"
            },
            {
                "id": 13,
                "Name": "Wal-Finite",
                "Manufacturer": "WALGREEN CO.",
                "Batch_No": "0363-0491",
                "Expiration_Date": "05/08/2020",
                "Price": "339.53",
                "Type": "CAPSULE"
            },
            {
                "id": 14,
                "Name": "Equetro",
                "Manufacturer": "Validus Pharmaceuticals LLC",
                "Batch_No": "30698-419",
                "Expiration_Date": "09/20/2019",
                "Price": "464.11",
                "Type": "CAPSULE"
            },
            {
                "id": 15,
                "Name": "Minocycline Hydrochloride",
                "Manufacturer": "Rebel Distributors Corp.",
                "Batch_No": "21695-693",
                "Expiration_Date": "09/04/2021",
                "Price": "41.58",
                "Type": "CAPSULE"
            },
            {
                "id": 16,
                "Name": "Moist SURE",
                "Manufacturer": "DSHealthcare",
                "Batch_No": "0699-5725",
                "Expiration_Date": "10/24/2018",
                "Price": "597.33",
                "Type": "CAPSULE"
            },
            {
                "id": 17,
                "Name": "Tricor",
                "Manufacturer": "AbbVie Inc.",
                "Batch_No": "0074-6123",
                "Expiration_Date": "06/16/2021",
                "Price": "178.48",
                "Type": "CAPSULE"
            },
            {
                "id": 18,
                "Name": "Haloperidol",
                "Manufacturer": "Pharmaceutical Associates, Inc.",
                "Batch_No": "0121-0581",
                "Expiration_Date": "09/22/2019",
                "Price": "936.90",
                "Type": "CAPSULE"
            },
            {
                "id": 19,
                "Name": "Hydralazine Hydrochloride",
                "Manufacturer": "REMEDYREPACK INC.",
                "Batch_No": "61786-032",
                "Expiration_Date": "08/22/2020",
                "Price": "705.23",
                "Type": "CAPSULE"
            },
            {
                "id": 20,
                "Name": "Vancomycin HCl",
                "Manufacturer": "Cantrell Drug Company",
                "Batch_No": "52533-070",
                "Expiration_Date": "08/16/2017",
                "Price": "267.53",
                "Type": "CAPSULE"
            }
        ]
    }
}