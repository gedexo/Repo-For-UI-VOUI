import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutomotoComponent } from './list-automoto.component';

describe('ListAutomotoComponent', () => {
  let component: ListAutomotoComponent;
  let fixture: ComponentFixture<ListAutomotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutomotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAutomotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
