import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSportComponent } from './list-sport.component';

describe('ListSportComponent', () => {
  let component: ListSportComponent;
  let fixture: ComponentFixture<ListSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
