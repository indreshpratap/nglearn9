import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { elementEnd } from '@angular/core/src/render3/instructions';

@Directive({
    selector: '[highlight]' // attribute selector just like css

})
export class HighlightDirective implements OnInit {
   

    @Input("highlight") bgColor: string;
    @Input('width') width: string;

    flag = false;

    /**
     * ElementRef is a wrapper around the html element on which,
     * this directive is applied, it has a property called
     *  `nativeElement` which is a javascript ref of that html element.
     * @param element 
     */
    constructor(private element: ElementRef) {
        console.log('Element is:', element.nativeElement);
        //  this.hightlight();
        console.log("Constructor bgcolor:",this.bgColor);
        console.log("Constructor width:",this.width);

    }

 ngOnInit(): void {
    console.log("oninit bgcolor:",this.bgColor);
    console.log("oninit width:",this.width);
    }
    applyBackground(color) {
        this.element.nativeElement.style.backgroundColor = color;
    }

    @HostListener("mouseenter")
    hightLightTag() {
        this.applyBackground(this.bgColor || 'yellow');
    }

    @HostListener("mouseleave")
    removeBg() {
        this.applyBackground('');
    }

    @HostListener('click')
    toogleWidth() {
        if (this.width) {
            this.element.nativeElement.style.width = this.flag ? '' : this.width;
            this.flag = !this.flag;
        }
    }

}