import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent {
  cliente: Cliente = new Cliente();
  submitted=false;

  constructor(private  empService : ClienteService, private route:Router) {}
  onSubmit(){
    this.empService.addCliente(this.cliente).subscribe(data=>{
      console.log(data);
      this.submitted=true;
      this.cliente= new Cliente();
      this.route.navigate(['/home'])
    },err=> console.log(err));
  }
}
