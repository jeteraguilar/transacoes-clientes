import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTransacaoComponent } from './get-transacao.component';

describe('GetClienteComponent', () => {
  let component: GetTransacaoComponent;
  let fixture: ComponentFixture<GetTransacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTransacaoComponent]
    });
    fixture = TestBed.createComponent(GetTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

