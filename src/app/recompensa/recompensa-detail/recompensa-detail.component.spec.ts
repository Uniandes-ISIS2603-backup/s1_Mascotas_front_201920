import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensaDetailComponent } from './recompensa-detail.component';

describe('RecompensaDetailComponent', () => {
  let component: RecompensaDetailComponent;
  let fixture: ComponentFixture<RecompensaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompensaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
