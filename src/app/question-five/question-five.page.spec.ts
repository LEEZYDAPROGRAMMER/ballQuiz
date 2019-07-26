import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFivePage } from './question-five.page';

describe('QuestionFivePage', () => {
  let component: QuestionFivePage;
  let fixture: ComponentFixture<QuestionFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
