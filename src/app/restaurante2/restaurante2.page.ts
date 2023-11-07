import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurante2',
  templateUrl: './restaurante2.page.html',
  styleUrls: ['./restaurante2.page.scss'],
})
export class Restaurante2Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('/restaurante3'); // Substitua "/outra-pagina" pelo caminho da página desejada

  }
}
