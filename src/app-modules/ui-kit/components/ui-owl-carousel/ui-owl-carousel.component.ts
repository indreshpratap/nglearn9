import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';
declare var jQuery: any;//get global reference of jquery object

@Component({
    selector: 'ui-owl-carousel',
    templateUrl: './ui-owl-carousel.component.html',
    styleUrls: ['./ui-owl-carousel.component.css']
})
export class UiOwlCarouselComponent implements OnInit,AfterViewInit {

    @Input() options: any;
    @ViewChild("carousel") container: ElementRef;
    @ContentChild("firstitem") firstitem;
    constructor() { }

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    ngOnInit(): void {
        console.log("init first item",this.firstitem);
        
    }
    
    ngAfterContentInit(): void {
        console.log("content init first item",this.firstitem);
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        
    }

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    ngAfterViewInit(): void {

        console.log("view first item",this.firstitem);
        setTimeout(()=>{
            this.initCarousel();
        },100);

    }

    initCarousel() {
        jQuery(this.container.nativeElement).owlCarousel(this.options)
    }

    destroy(){
        console.log('destroying...');
        jQuery(this.container.nativeElement).owlCarousel('destroy'); 
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.destroy();
    }

}
