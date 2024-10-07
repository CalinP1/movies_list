import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsUserAccountComponent } from './hotels-user-account.component';

describe('HotelsUserAccountComponent', () => {
  let component: HotelsUserAccountComponent;
  let fixture: ComponentFixture<HotelsUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsUserAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
