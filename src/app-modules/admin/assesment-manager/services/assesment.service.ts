import { Injectable } from '@angular/core';

@Injectable()
export class AssesmentService {

    getGroups() {
        return [
            { "id": 1, "label": "Angular" },
            { "id": 2, "label": "JavaScript" }
        ];
    }
}