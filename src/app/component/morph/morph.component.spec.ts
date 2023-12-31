import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphComponent } from './morph.component';

describe('MorphComponent', () => {
  let component: MorphComponent;
  let fixture: ComponentFixture<MorphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorphComponent]
    });
    fixture = TestBed.createComponent(MorphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
