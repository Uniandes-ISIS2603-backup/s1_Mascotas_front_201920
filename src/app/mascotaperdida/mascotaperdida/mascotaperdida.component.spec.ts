import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPerdidaComponent } from './mascotaperdida.component';

describe('MascotaPerdidaComponent', () => {
  let component: MascotaPerdidaComponent;
  let fixture: ComponentFixture<MascotaPerdidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaPerdidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaPerdidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
