import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../message";

@Component({
  selector: "app-obj-message",
  template: `<div class="alert alert-{{getType()}}" *ngIf="value && value.message">
  {{value.message}}
  <button *ngIf="value.close" type="button" class="close" (click)="onClose()">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>
  `,
  styles: [``]
})
export class AppObjMessageComponent {
  @Input()
  value: Message;

  onClose() {
    this.value = null;
  }

  getType() {
    return this.value.type ? this.value.type : "info";
  }
}
