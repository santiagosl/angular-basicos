import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from "../contador/contador/contador.component";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './heroe/listado/listado.component';


@NgModule({
  declarations: [
    HeroeComponent
  ],

  imports: [
    CommonModule
  ]

})
export class HeroesModule{}
