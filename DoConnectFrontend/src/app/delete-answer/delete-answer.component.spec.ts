import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAnswerComponent } from './delete-answer.component';

describe('DeleteAnswerComponent', () => {
  let component: DeleteAnswerComponent;
  let fixture: ComponentFixture<DeleteAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
