import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceUpdateComponent } from './province-update.component';

describe('ProvinceUpdateComponent', () => {
  let component: ProvinceUpdateComponent;
  let fixture: ComponentFixture<ProvinceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinceUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
