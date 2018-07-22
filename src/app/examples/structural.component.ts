import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-structural',
    templateUrl: './structural.component.html',
    styles:['.del{text-decoration:line-through}']
    // styleUrls: ['./structural.component.css']
})
export class StructuralComponent{
    show = true;
    editing = true;

    todos = [];
    doneTodos =[];
    objTodos = [];

    todoInputItem;

    toggle(){
        this.show = !this.show;
    }

    openForm(){
        this.editing = true;
    }

    addItem(){
        this.todos.push(this.todoInputItem);
        this.objTodos.push({checked:false,done:false,todo:this.todoInputItem});
        this.todoInputItem = '';
        

    }

    done(indx,todo){
        this.doneTodos.push(todo);
        this.todos.splice(indx,1);
    }
    pending(indx,todo){
        this.todos.push(todo);
        this.doneTodos.splice(indx,1);
    }

    markDoneAllChecked(){
        for(let ot of this.objTodos){
            if(ot.checked){
                ot.done= true;
            }
        }
    }
}
