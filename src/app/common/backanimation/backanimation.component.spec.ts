import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackanimationComponent } from './backanimation.component';

describe('BackanimationComponent', () => {
  let component: BackanimationComponent;
  let fixture: ComponentFixture<BackanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackanimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
