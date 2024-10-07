import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsMainMenuComponent } from './hotels-main-menu.component';

describe('HotelsMainMenuComponent', () => {
  let component: HotelsMainMenuComponent;
  let fixture: ComponentFixture<HotelsMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsMainMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
