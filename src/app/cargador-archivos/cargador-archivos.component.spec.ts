import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadorArchivosComponent } from './cargador-archivos.component';

describe('CargadorArchivosComponent', () => {
  let component: CargadorArchivosComponent;
  let fixture: ComponentFixture<CargadorArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargadorArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargadorArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
