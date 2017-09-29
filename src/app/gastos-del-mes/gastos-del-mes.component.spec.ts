import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosDelMesComponent } from './gastos-del-mes.component';

describe('GastosDelMesComponent', () => {
  let component: GastosDelMesComponent;
  let fixture: ComponentFixture<GastosDelMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosDelMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosDelMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
