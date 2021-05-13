import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksbycategoryComponent } from './drinksbycategory.component';

describe('DrinksbycategoryComponent', () => {
  let component: DrinksbycategoryComponent;
  let fixture: ComponentFixture<DrinksbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksbycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
