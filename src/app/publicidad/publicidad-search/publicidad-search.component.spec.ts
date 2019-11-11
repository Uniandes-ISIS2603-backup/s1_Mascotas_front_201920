import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadSearchComponent } from './publicidad-search.component';

describe('PublicidadSearchComponent', () => {
  let component: PublicidadSearchComponent;
  let fixture: ComponentFixture<PublicidadSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
