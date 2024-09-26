import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transacao } from 'src/app/model/transacao';
import { TransacaoService } from 'src/app/transacao.service';

@Component({
  selector: 'app-transacao-list',
  templateUrl: './transacao-list.component.html',
  styleUrls: ['./transacao-list.component.css']
})
export class TransacaoListComponent implements OnInit {
  transacoes:Transacao[] = [];



  constructor(private transacaoService: TransacaoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.transacaoService.getAllTransacoes().subscribe(data=> this.transacoes=data);
  }

  deleteTransacao(id: number) {
    this.transacaoService.deleteTransacao(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  transacaoDetails(id: number){
    this.router.navigate(['/details/transacao', id]);
  }

  updateTransacao(id: number){
    this.router.navigate(['/update/transacao', id]);
  }

  calcularSaldoTotal(): number {
    return this.transacoes.reduce((total, transacao) => total + transacao.valor, 0);
}
}

