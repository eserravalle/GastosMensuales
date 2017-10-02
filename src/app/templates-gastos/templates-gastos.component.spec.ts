import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesGastosComponent } from './templates-gastos.component';

describe('TemplatesGastosComponent', () => {
  let component: TemplatesGastosComponent;
  let fixture: ComponentFixture<TemplatesGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
