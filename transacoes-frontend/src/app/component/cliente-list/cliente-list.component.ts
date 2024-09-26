import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes!:Cliente[];

  constructor(private clienteService: ClienteService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clienteService.getAllClientes().subscribe(data=> this.clientes=data);
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clienteDetails(id: number){
    this.router.navigate(['/details', id]);
  }

  updateCliente(id: number){
    this.router.navigate(['/update', id]);
  }
}

