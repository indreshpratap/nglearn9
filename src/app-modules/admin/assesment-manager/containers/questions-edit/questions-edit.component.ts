import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { CustomValidators } from '../../../../shared/custom.validators';
import { AssesmentService } from '../../services/assesment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-adm-questions',
    templateUrl: './questions-edit.component.html',
    // styleUrls: ['./que-group.component.css']
})
export class AdminQuestionsEditComponent implements OnInit {
    form: FormGroup;
    options: FormArray;
    groups: Array<any>;

    // Dependency Injection
    constructor(
        private currentRoute: ActivatedRoute,
        private fb: FormBuilder,
        private assesmentService: AssesmentService,

    ) {

     //   console.log(this.currentRoute.component);

        //  let assesmentService = new AssesmentService();
        assesmentService.getGroups().subscribe(data => this.groups = data);
        this.prepareForm();
        // this.patchIt();
    }


    ngOnInit(){
       console.log("Current Selected id", this.currentRoute.snapshot.params);
    }


    prepareForm() {
        // first initilize the array
        this.options = this.fb.array([]);

        // then master form
        this.form = this.fb.group({
            group: ['', [Validators.required]], // a form control
            question: this.fb.group({
                que: [],
                type: [1],
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
    
        this.assesmentService.saveQuestion(this.form.value).subscribe(res=>{
            if(res.status){
                alert('Question saved');
                this.form.reset();
            }
        })

    }




}



