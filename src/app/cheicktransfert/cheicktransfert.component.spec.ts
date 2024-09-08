import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheicktransfertComponent } from './cheicktransfert.component';

describe('CheicktransfertComponent', () => {
  let component: CheicktransfertComponent;
  let fixture: ComponentFixture<CheicktransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheicktransfertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheicktransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
