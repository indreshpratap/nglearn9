import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOwlCarouselComponent } from './ui-owl-carousel.component';

describe('UiOwlCarouselComponent', () => {
  let component: UiOwlCarouselComponent;
  let fixture: ComponentFixture<UiOwlCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiOwlCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOwlCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
