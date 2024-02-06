import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneracionesComponent } from './components/generaciones/generaciones.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { PokemonComponent } from './components/pokemon/pokemon.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    GeneracionesComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
