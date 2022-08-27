import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBenhAnComponent } from './update-benh-an.component';

describe('UpdateBenhAnComponent', () => {
  let component: UpdateBenhAnComponent;
  let fixture: ComponentFixture<UpdateBenhAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBenhAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBenhAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
