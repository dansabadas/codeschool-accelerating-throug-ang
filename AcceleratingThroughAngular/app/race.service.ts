﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Race } from './race';

@Injectable()
export class RaceService {

    constructor(private http: Http) { }

    getRaces() {
        return this.http.get('app/races.json')
            .map(response => <Race[]>response.json().racesData);
    }
}
