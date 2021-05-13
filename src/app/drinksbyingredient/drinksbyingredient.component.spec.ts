import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksbyingredientComponent } from './drinksbyingredient.component';

describe('DrinksbyingredientComponent', () => {
  let component: DrinksbyingredientComponent;
  let fixture: ComponentFixture<DrinksbyingredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksbyingredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksbyingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
