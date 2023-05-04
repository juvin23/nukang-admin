import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCategoryComponent } from './merchant-category.component';

describe('MerchantCategoryComponent', () => {
  let component: MerchantCategoryComponent;
  let fixture: ComponentFixture<MerchantCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
