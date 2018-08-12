import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-message",
  template: `<div class="alert alert-info" *ngIf="message">
  {{message}}
  <button *ngIf="close" type="button" class="close" (click)="onClose()">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>
  `,
  styles: [``]
})
export class AppMessageComponent {
  @Input()
  message: string;

  @Input() close:boolean;



  onClose(){
    this.message = '';
  }
}
