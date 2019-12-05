import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensaCreateComponent } from './recompensa-create.component';

describe('RecompensaCreateComponent', () => {
  let component: RecompensaCreateComponent;
  let fixture: ComponentFixture<RecompensaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompensaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
