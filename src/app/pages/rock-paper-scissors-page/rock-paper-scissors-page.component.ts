import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors-page',
  templateUrl: './rock-paper-scissors-page.component.html',
  styleUrls: ['./rock-paper-scissors-page.component.css']
})
export class RockPaperScissorsPageComponent {
  public computerChoise = '';
  public computerResult = 0;
  public playerChoise = '';
  public playerResult = 0;

  constructor() {
  }

  newGame(){

  }

}
