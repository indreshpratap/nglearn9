import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssesmentService } from '../../services/assesment.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-question-list',
  templateUrl: './admin-question-list.component.html',
  styleUrls: ['./admin-question-list.component.css'],
  encapsulation:ViewEncapsulation.None,

})
export class AdminQuestionListComponent implements OnInit {

  groups;
  questions;

  groupSelCtrl = new FormControl(null,[Validators.required]);

  constructor( private assesmentService: AssesmentService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(){
    this.assesmentService.getGroups()
    .subscribe(groups=>this.groups=groups )
  }


  // getQuestions(groupId){
  getQuestions(){
    this.assesmentService.getQuestions(this.groupSelCtrl.value)
    .subscribe(res=>this.questions=res.data);
  }

  reset(){
    this.groupSelCtrl.reset();
  }

}
