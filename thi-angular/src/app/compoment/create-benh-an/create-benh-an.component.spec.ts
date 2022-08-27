import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBenhAnComponent } from './create-benh-an.component';

describe('CreateBenhAnComponent', () => {
  let component: CreateBenhAnComponent;
  let fixture: ComponentFixture<CreateBenhAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBenhAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBenhAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
