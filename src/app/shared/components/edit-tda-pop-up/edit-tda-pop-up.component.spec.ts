import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTdaPopUpComponent } from './edit-tda-pop-up.component';

describe('EditTdaPopUpComponent', () => {
  let component: EditTdaPopUpComponent;
  let fixture: ComponentFixture<EditTdaPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTdaPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTdaPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
