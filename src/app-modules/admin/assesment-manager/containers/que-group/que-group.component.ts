import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../shared/custom.validators';

@Component({
    selector: 'app-adm-que-group',
    templateUrl: './que-group.component.html',
    // styleUrls: ['./que-group.component.css']
})
export class AdminQueGroupComponent implements OnInit, OnDestroy {

    form: FormGroup;
    bg = 'lightgray';

    constructor() {
        this.prepareForm();
        // this.patchIt();
    }

    ngOnInit(): void {
        console.log("question group oninit");
    }
    ngOnDestroy(): void {
        console.log("question group ondestroy");

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
