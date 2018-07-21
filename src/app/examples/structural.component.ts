import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-structural',
    templateUrl: './structural.component.html',
    // styleUrls: ['./structural.component.css']
})
export class StructuralComponent{
    show = true;
    editing = true;

    todos = [];

    todoInputItem;

    toggle(){
        this.show = !this.show;
    }

    openForm(){
        this.editing = true;
    }

    addItem(){
        this.todos.push(this.todoInputItem);
        this.todoInputItem = '';

    }
}
