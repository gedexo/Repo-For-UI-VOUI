import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFashionComponent } from './list-fashion.component';

describe('ListFashionComponent', () => {
  let component: ListFashionComponent;
  let fixture: ComponentFixture<ListFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
