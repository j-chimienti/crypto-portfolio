import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPortfolioItemComponent } from './edit-portfolio-item.component';

describe('EditPortfolioItemComponent', () => {
  let component: EditPortfolioItemComponent;
  let fixture: ComponentFixture<EditPortfolioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPortfolioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
