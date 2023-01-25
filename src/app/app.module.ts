import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DadosComponent } from './dados/dados.component';
import { EstruturaComponent } from './estrutura/estrutura.component';
import { FooterComponent } from './footer/footer.component';
import { FuncionamentoComponent } from './funcionamento/funcionamento.component';
import { SharedChartComponent } from './shared-chart/shared-chart.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CadastroComponent,
    DadosComponent,
    EstruturaComponent,
    FooterComponent,
    FuncionamentoComponent,
    SharedChartComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
