import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaencontradaEditorComponent } from './mascotaencontrada-editor.component';

describe('MascotaencontradaEditorComponent', () => {
  let component: MascotaencontradaEditorComponent;
  let fixture: ComponentFixture<MascotaencontradaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaencontradaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaencontradaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
