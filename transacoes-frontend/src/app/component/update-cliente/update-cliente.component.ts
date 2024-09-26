import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent {

  id!: number;
  cliente!: Cliente;

  constructor(private route: ActivatedRoute,private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();

    this.id = this.route.snapshot.params['id'];
    debugger;

    this.clienteService.getCliente(this.id)
      .subscribe(data => {
        console.log(data)
        this.cliente = data;
      }, error => console.log(error));
  }

  updateCliente() {
    this.clienteService.updateCliente(this.id, this.cliente)
      .subscribe(data => {
        console.log(data);
        this.cliente = new Cliente();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCliente();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }
}
