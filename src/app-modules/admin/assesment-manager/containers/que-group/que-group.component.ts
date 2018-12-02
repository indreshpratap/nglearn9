import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../shared/custom.validators';
import { ApiClient } from 'src/app-modules/shared/api.client';
import { AssesmentService } from '../../services/assesment.service';

@Component({
    selector: 'app-adm-que-group',
    templateUrl: './que-group.component.html',
    // styleUrls: ['./que-group.component.css']
})
export class AdminQueGroupComponent implements OnInit, OnDestroy {

    form: FormGroup;
    bg = 'lightgray';
    boxWidth = '600px';
    groups;


    constructor(private assesmentService: AssesmentService, private api: ApiClient) {
        this.prepareForm();
        // this.patchIt();
    }



    ngOnInit(): void {
        console.log("question group oninit");

        this.getGroups();
        this.fetchFromXyz();
    }
    ngOnDestroy(): void {
        console.log("question group ondestroy");

    }


    getGroups() {
        this.assesmentService.getGroups()
            .subscribe(data => this.groups = data,
                (err) => {
                    console.warn(err);
                    alert('Failed to fetch groups');
                }
            );
    }

    fetchFromXyz() {
        this.api.fetchFromXyz('posts').subscribe(res => {
            console.log(res);
        })
    }
    prepareForm() {
        this.form = new FormGroup({
            groupName: new FormControl(null, [Validators.required, Validators.minLength(5), CustomValidators.stringOnly]),
            description: new FormControl(null, [Validators.required, CustomValidators.stringOnly]),
            accessability: new FormControl(2),
            tags: new FormControl('javascript')
        });
    }

    saveGroup() {
        console.log(this.form.value);

        if (this.form.valid) {
            let data = this.form.value;
            this.assesmentService.saveGroup(data)
                .subscribe(data => {
                    if (data.status) {
                        alert('Group Saved');
                        this.form.reset();
                        this.getGroups();
                    }
                })

        }

    }

    fillIt() {

        // must supply all the controls value
        this.form.setValue({
            groupName: "custom group name",
            description: "this is description !",
            accessability: 3,
            // tags: "js,ng"
        })
    }

    patchIt() {

        // must supply all the controls value
        this.form.patchValue({
            groupName: "custom group name",
            description: "this is description",
            accessability: 3
        })


    }


}
