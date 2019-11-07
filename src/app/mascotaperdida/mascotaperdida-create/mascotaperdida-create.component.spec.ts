import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPerdidaCreateComponent } from './mascotaperdida-create.component';

describe('MascotaPerdidaCreateComponent', () => {
  let component: MascotaPerdidaCreateComponent;
  let fixture: ComponentFixture<MascotaPerdidaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaPerdidaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaPerdidaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
