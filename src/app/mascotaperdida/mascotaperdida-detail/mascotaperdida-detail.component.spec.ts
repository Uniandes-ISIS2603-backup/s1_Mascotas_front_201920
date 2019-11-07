import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPerdidaDetailComponent } from './mascotaperdida-detail.component';

describe('MascotaPerdidaDetailComponent', () => {
  let component: MascotaPerdidaDetailComponent;
  let fixture: ComponentFixture<MascotaPerdidaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaPerdidaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaPerdidaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
