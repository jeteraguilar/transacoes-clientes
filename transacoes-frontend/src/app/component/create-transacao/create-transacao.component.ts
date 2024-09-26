import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transacao } from 'src/app/model/transacao';
import { TransacaoService } from 'src/app/transacao.service';

@Component({
  selector: 'app-create-transacao',
  templateUrl: './create-transacao.component.html',
  styleUrls: ['./create-transacao.component.css']
})
export class CreateTransacaoComponent {
  transacao: Transacao = new Transacao();
  submitted=false;

  constructor(private  empService : TransacaoService, private route:Router) {}
  onSubmit(){
    this.empService.addTransacao(this.transacao).subscribe(data=>{
      console.log(data);
      this.submitted=true;
      this.transacao= new Transacao();
      this.route.navigate(['/home'])
    },err=> console.log(err));
  }
}
