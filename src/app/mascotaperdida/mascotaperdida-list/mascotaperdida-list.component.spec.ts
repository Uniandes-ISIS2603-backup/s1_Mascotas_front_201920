import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaPerdidaListComponent } from './mascotaperdida-list.component';

describe('MascotaperdidaListComponent', () => {
  let component: MascotaPerdidaListComponent;
  let fixture: ComponentFixture<MascotaPerdidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaPerdidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaPerdidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
