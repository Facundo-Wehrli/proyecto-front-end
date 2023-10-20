import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsPageComponent } from './fields-page.component';

describe('FieldsPageComponent', () => {
  let component: FieldsPageComponent;
  let fixture: ComponentFixture<FieldsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsPageComponent]
    });
    fixture = TestBed.createComponent(FieldsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
