import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolinformationComponent } from './schoolinformation.component';

describe('SchoolinformationComponent', () => {
  let component: SchoolinformationComponent;
  let fixture: ComponentFixture<SchoolinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
