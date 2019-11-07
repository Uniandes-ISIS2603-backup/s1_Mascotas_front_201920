import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadDetailComponent } from './publicidad-detail.component';

describe('PublicidadDetailComponent', () => {
  let component: PublicidadDetailComponent;
  let fixture: ComponentFixture<PublicidadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
