import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonImg, IonText, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonImg, IonText, IonInput, IonButton, FormsModule],
})
export class HomePage {

  edad:number = 0;
  resultado:string = 'calcular';

  constructor() { }

    
  calcular(){
    let edadCanina:number= this.edad * 7;
    this.resultado = 'La edad canina de su mascota es de ' + edadCanina + ' años';

  }
}
