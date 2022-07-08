import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishallComponent } from './wishall.component';

describe('WishallComponent', () => {
  let component: WishallComponent;
  let fixture: ComponentFixture<WishallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
