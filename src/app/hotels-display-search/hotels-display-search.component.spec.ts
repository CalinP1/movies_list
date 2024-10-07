import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsDisplaySearchComponent } from './hotels-display-search.component';

describe('HotelsDisplaySearchComponent', () => {
  let component: HotelsDisplaySearchComponent;
  let fixture: ComponentFixture<HotelsDisplaySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsDisplaySearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsDisplaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
