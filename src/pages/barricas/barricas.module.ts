import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarricasPage } from './barricas';

@NgModule({
  declarations: [
    BarricasPage,
  ],
  imports: [
    IonicPageModule.forChild(BarricasPage),
  ],
})
export class BarricasPageModule {}
