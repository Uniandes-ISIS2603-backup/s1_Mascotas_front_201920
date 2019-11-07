import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadCreateComponent } from './publicidad-create.component';

describe('PublicidadCreateComponent', () => {
  let component: PublicidadCreateComponent;
  let fixture: ComponentFixture<PublicidadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
