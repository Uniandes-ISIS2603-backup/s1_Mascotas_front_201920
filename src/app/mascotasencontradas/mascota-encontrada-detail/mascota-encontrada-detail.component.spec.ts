import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaEncontradaDetailComponent } from './mascota-encontrada-detail.component';

describe('MascotaEncontradaDetailComponent', () => {
  let component: MascotaEncontradaDetailComponent;
  let fixture: ComponentFixture<MascotaEncontradaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaEncontradaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaEncontradaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
