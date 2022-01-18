import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOverlayComponent } from './manage-overlay.component';

describe('ManageOverlayComponent', () => {
  let component: ManageOverlayComponent;
  let fixture: ComponentFixture<ManageOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
