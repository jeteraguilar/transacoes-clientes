import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transacao } from 'src/app/model/transacao';

import { TransacaoService } from 'src/app/transacao.service';

@Component({
  selector: 'app-update-transacao',
  templateUrl: './update-transacao.component.html',
  styleUrls: ['./update-transacao.component.css']
})
export class UpdateTransacaoComponent {

  id!: number;
  transacao!: Transacao;

  constructor(private route: ActivatedRoute,private router: Router,
    private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.transacao = new Transacao();

    this.id = this.route.snapshot.params['id'];
    debugger;

    this.transacaoService.getTransacao(this.id)
      .subscribe(data => {
        console.log(data)
        this.transacao = data;
      }, error => console.log(error));
  }

  updateTransacao() {
    this.transacaoService.updateTransacao(this.id, this.transacao)
      .subscribe(data => {
        console.log(data);
        this.transacao = new Transacao();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTransacao();
  }

  gotoList() {
    this.router.navigate(['/home/transacoes']);
  }

  ajustarValor() {
    if (this.transacao.tipoTransacao === 'CREDITO') {
        this.transacao.valor = Math.abs(this.transacao.valor); // Garantir que o valor seja positivo
    } else if (this.transacao.tipoTransacao === 'DEBITO') {
        this.transacao.valor = -Math.abs(this.transacao.valor); // Garantir que o valor seja negativo
    }
  }
}
