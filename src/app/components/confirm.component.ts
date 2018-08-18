import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-confirm',
    template: `
    <div class="alert alert-warning" *ngIf="message">
        {{message}}
        <div class="pull-right">
            <button type="button" (click)="handleYes($event)">Yes</button>
            <button type="button" (click)="handleNo()">No</button>
            <button type="button" (click)="handleCancel()">Cancel</button>
        </div>
  </div>
    `,

})
export class ConfirmComponent {
    @Input("confirmMessage") message: string;

    @Output() onYes: EventEmitter<any> = new EventEmitter();
    @Output() onNo: EventEmitter<any> = new EventEmitter();
    @Output() onCancel: EventEmitter<any> = new EventEmitter();

    handleYes(e) {
        console.log('Yes click in child',e);
        this.onYes.emit({type:'yes',id:1,msg:this.message});//emitting an event

    }
    handleNo() {
        console.log('No click');
        this.onNo.emit({type:'no',id:2,msg:this.message});//emitting an event

    }
    handleCancel() {
        alert('Cancel click');
        this.onCancel.emit({type:'cancel',id:3,msg:this.message});//emitting an event
    }
}
