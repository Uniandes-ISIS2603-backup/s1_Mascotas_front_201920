import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasencontradasListComponent } from './mascotasencontradas-list.component';

describe('MascotasencontradasListComponent', () => {
  let component: MascotasencontradasListComponent;
  let fixture: ComponentFixture<MascotasencontradasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasencontradasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasencontradasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
