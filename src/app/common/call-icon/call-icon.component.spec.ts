import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallIconComponent } from './call-icon.component';

describe('CallIconComponent', () => {
  let component: CallIconComponent;
  let fixture: ComponentFixture<CallIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
