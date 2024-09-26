import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransacaoComponent } from './update-transacao.component';

describe('UpdateTransacaoComponent', () => {
  let component: UpdateTransacaoComponent;
  let fixture: ComponentFixture<UpdateTransacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTransacaoComponent]
    });
    fixture = TestBed.createComponent(UpdateTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
