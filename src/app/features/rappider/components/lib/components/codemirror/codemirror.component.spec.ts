import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiderCodemirrorComponent } from './codemirror.component';

describe('RappiderCodemirrorComponent', () => {
  let component: RappiderCodemirrorComponent;
  let fixture: ComponentFixture<RappiderCodemirrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RappiderCodemirrorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiderCodemirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
