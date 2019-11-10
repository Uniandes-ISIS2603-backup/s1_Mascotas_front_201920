import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEncontradaCreateComponent } from './mascota-encontrada-create.component';

describe('MascotaEncontradaCreateComponent', () => {
  let component: MascotaEncontradaCreateComponent;
  let fixture: ComponentFixture<MascotaEncontradaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaEncontradaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaEncontradaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
