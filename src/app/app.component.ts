import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diceOne = "../assets/img/dice2.png";
  diceTwo = "../assets/img/dice5.png";

  numberOne = 1;
  numberTwo = 2;

  rollDices(): void {
    this.numberOne = Math.round(Math.random() * 5) + 1;
    this.numberTwo = Math.round(Math.random() * 5) + 1;

    this.diceOne = `../assets/img/dice${this.numberOne}.png`
    this.diceTwo = `../assets/img/dice${this.numberTwo}.png`
  }

}
