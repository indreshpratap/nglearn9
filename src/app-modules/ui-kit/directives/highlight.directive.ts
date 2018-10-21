import { Directive, ElementRef, Input, HostListener, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Directive({
    selector: '[highlight]' // attribute selector just like css

})
export class HighlightDirective implements OnInit, OnChanges, DoCheck {




    @Input("highlight") bgColor: string;
    @Input('width') width: string;
    @Input() trackid: string;

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
        console.log("Constructor bgcolor:", this.bgColor);
        console.log("Constructor width:", this.width);

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

    ngDoCheck(): void {
        console.log("Do check", this.trackid);
    }

    //
    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.trackid, "On changes for track id:", changes);
        if (changes['bgColor']) {
            console.log("Changed in bgColor");
        }
        if (changes['width']) {
            let w = changes['width'];
            console.log("changes in width", w.currentValue, w.firstChange, w.previousValue);
        }
    }

    ngOnInit(): void {
        console.log(this.trackid, "oninit bgcolor:", this.bgColor);
        console.log(this.trackid, "oninit width:", this.width);
    }
    applyBackground(color) {
        this.element.nativeElement.style.backgroundColor = color;
    }


}