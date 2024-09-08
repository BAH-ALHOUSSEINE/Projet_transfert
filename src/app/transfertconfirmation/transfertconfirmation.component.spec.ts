import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertconfirmationComponent } from './transfertconfirmation.component';

describe('TransfertconfirmationComponent', () => {
  let component: TransfertconfirmationComponent;
  let fixture: ComponentFixture<TransfertconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransfertconfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransfertconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
