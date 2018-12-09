import { Injectable } from '@angular/core';
import { ApiClient } from 'src/app-modules/shared/api.client';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AssesmentService {
    constructor(private api: ApiClient) {

    }
    getGroups() {
        return this.api.fetch('admin/get-groups')
            .pipe(
                map(res => {
                    return res.data;
                }));
    }

    saveGroup(data) {
        return this.api.post('admin/register-group', data);
    }
    saveQuestion(data) {
        return this.api.post('admin/register-question', data);
    }

    getQuestions(groupId) {
        return this.api.fetch('admin/get-questions/'+groupId);
    }



}