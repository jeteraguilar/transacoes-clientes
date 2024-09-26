import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-get-cliente',
  templateUrl: './get-cliente.component.html',
  styleUrls: ['./get-cliente.component.css']
})
export class GetClienteComponent {

  id!: number;
  cliente!: Cliente;

  constructor(private route: ActivatedRoute,private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();

    this.id = this.route.snapshot.params['id'];

    this.clienteService.getCliente(this.id)
      .subscribe(data => {
        console.log(data)
        this.cliente = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['home']);
  }
}
