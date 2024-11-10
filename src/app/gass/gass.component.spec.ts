import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GassComponent } from './gass.component';

describe('GassComponent', () => {
  let component: GassComponent;
  let fixture: ComponentFixture<GassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
