import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioService } from './propietarios/propietario.service'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PropietariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropietarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
