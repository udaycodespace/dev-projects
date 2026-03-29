import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureGoalsComponent } from './future-goals.component';

describe('FutureGoalsComponent', () => {
  let component: FutureGoalsComponent;
  let fixture: ComponentFixture<FutureGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutureGoalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FutureGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
