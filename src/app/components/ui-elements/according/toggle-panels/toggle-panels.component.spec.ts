import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePanelsComponent } from './toggle-panels.component';

describe('TogglePanelsComponent', () => {
  let component: TogglePanelsComponent;
  let fixture: ComponentFixture<TogglePanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TogglePanelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TogglePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
