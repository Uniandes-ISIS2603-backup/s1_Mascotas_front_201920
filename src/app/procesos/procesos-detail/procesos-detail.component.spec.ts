import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosDetailComponent } from './procesos-detail.component';

describe('ProcesosDetailComponent', () => {
  let component: ProcesosDetailComponent;
  let fixture: ComponentFixture<ProcesosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
