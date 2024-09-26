import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transacao } from 'src/app/model/transacao';
import { TransacaoService } from 'src/app/transacao.service';

@Component({
  selector: 'app-get-transacao',
  templateUrl: './get-transacao.component.html',
  styleUrls: ['./get-transacao.component.css']
})
export class GetTransacaoComponent {

  id!: number;
  transacao!: Transacao;

  constructor(private route: ActivatedRoute,private router: Router,
    private transacaoService: TransacaoService) { }

  ngOnInit() {
    this.transacao = new Transacao();

    this.id = this.route.snapshot.params['transacao/id'];

    this.transacaoService.getTransacao(this.id)
      .subscribe(data => {
        console.log(data)
        this.transacao = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['home/transacoes']);
  }
}
