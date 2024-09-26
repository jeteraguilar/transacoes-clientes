import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    TransacaoListComponent,
    CreateClienteComponent,
    CreateTransacaoComponent,
    DeleteClienteComponent,
    DeleteTransacaoComponent,
    UpdateClienteComponent,
    UpdateTransacaoComponent,
    GetClienteComponent,
    GetTransacaoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
