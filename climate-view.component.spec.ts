import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateViewComponent } from './climate-view.component';

describe('ClimateViewComponent', () => {
  let component: ClimateViewComponent;
  let fixture: ComponentFixture<ClimateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClimateViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
