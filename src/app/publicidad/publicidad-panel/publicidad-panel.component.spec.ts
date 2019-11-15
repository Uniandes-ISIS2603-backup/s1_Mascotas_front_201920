import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadPanelComponent } from './publicidad-panel.component';

describe('PublicidadPanelComponent', () => {
  let component: PublicidadPanelComponent;
  let fixture: ComponentFixture<PublicidadPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicidadPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
