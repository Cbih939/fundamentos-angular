import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomComponent } from './pipe-custom/pipe-custom.component';
import { TwoWayDataBidingComponent } from './two-way-data-biding/two-way-data-biding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCustomComponent,
    TwoWayDataBidingComponent,
    RenderizandoListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
