import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NuevoGastoComponent } from './nuevo-gasto/nuevo-gasto.component';
import { GastosDelMesComponent } from './gastos-del-mes/gastos-del-mes.component';
import { TemplatesGastosComponent } from './templates-gastos/templates-gastos.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { LoginService } from './services/login.service';

describe('AppComponent', () => {
  let mockLoginService;
  beforeEach(async(() => {
    mockLoginService = {};
    TestBed.configureTestingModule({
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: LoginService, useValue: mockLoginService}
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        NuevoGastoComponent,
        GastosDelMesComponent,
        TemplatesGastosComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Gastos Mensuales'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Gastos Mensuales');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Gastos Mensuales');
  }));
});
