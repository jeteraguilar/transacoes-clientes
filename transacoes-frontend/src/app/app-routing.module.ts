import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListComponent } from './component/cliente-list/cliente-list.component';
import { CreateClienteComponent } from './component/create-cliente/create-cliente.component';
import { CreateTransacaoComponent } from './component/create-transacao/create-transacao.component';
import { DeleteClienteComponent } from './component/delete-cliente/delete-cliente.component';
import { DeleteTransacaoComponent } from './component/delete-transacao/delete-transacao.component';
import { GetClienteComponent } from './component/get-cliente/get-cliente.component';
import { GetTransacaoComponent } from './component/get-transacao/get-transacao.component';
import { TransacaoListComponent } from './component/transacao-list/transacao-list.component';
import { UpdateClienteComponent } from './component/update-cliente/update-cliente.component';
import { UpdateTransacaoComponent } from './component/update-transacao/update-transacao.component';

const routes: Routes = [
  { path: 'home', component: ClienteListComponent, },
  { path: 'add', component: CreateClienteComponent, },
  { path: 'delete', component: DeleteClienteComponent, },
  { path: 'update/:id', component: UpdateClienteComponent },
  { path: 'details/:id', component: GetClienteComponent },
  { path: '', redirectTo: 'home/transacoes', pathMatch: 'full', },

  { path: 'home/transacoes', component: TransacaoListComponent, },
  { path: 'add/transacao', component: CreateTransacaoComponent, },
  { path: 'delete/transacao', component: DeleteTransacaoComponent, },
  { path: 'update/transacao/:id', component: UpdateTransacaoComponent },
  { path: 'details/transacao/:id', component: GetTransacaoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
