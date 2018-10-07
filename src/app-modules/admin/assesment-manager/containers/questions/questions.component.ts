import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { CustomValidators } from '../../../../shared/custom.validators';
import { AssesmentService } from '../../services/assesment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-adm-questions',
    templateUrl: './questions.component.html',
    // styleUrls: ['./que-group.component.css']
})
export class AdminQuestionsComponent {
    form: FormGroup;
    options: FormArray;
    groups: Array<any>;

    // Dependency Injection
    constructor(
        private currentRoute: ActivatedRoute,
        private fb: FormBuilder,
        private assesmentService: AssesmentService
    ) {

        console.log(this.currentRoute.component);

        //  let assesmentService = new AssesmentService();
        this.groups = assesmentService.getGroups();
        this.prepareForm();
        // this.patchIt();
    }


    prepareForm() {
        // first initilize the array
        this.options = this.fb.array([]);

        // then master form
        this.form = this.fb.group({
            group: ['value', [Validators.required]], // a form control
            question: this.fb.group({
                que: [],
                type: [],
                options: this.options

            })

        })
    }

    addOption() {
        this.options.push(this.fb.group({
            label: [],
            isCorrect: [false]
        }));
    }

    removeOption(indx) {

        this.options.removeAt(indx);
    }

    save() {
        console.log(this.form);
        //  this.assesmentService.getGroups();

    }




}

// let s  = new AssesmentService();
// let c = new AdminQuestionsComponent();
// let c = new AdminQuestionsComponent();
// let c = new AdminQuestionsComponent(s);
// let c = new AdminQuestionsComponent(s);
// let c = new AdminQuestionsComponent(s);

