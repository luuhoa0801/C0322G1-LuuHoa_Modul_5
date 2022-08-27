import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBenhAnComponent } from './list-benh-an.component';

describe('ListCustomerComponent', () => {
  let component: ListBenhAnComponent;
  let fixture: ComponentFixture<ListBenhAnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBenhAnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBenhAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-benhAn', () => {
    expect(component).toBeTruthy();
  });
});
