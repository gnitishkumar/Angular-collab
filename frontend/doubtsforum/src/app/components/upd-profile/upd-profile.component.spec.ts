import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdProfileComponent } from './upd-profile.component';

describe('UpdProfileComponent', () => {
  let component: UpdProfileComponent;
  let fixture: ComponentFixture<UpdProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
