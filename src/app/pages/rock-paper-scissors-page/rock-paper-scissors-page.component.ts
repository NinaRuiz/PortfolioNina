import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rock-paper-scissors-page',
  templateUrl: './rock-paper-scissors-page.component.html',
  styleUrls: ['./rock-paper-scissors-page.component.css']
})
export class RockPaperScissorsPageComponent implements OnInit {
  public computerChoise = 0;
  public computerResult = 0;
  public playerChoise = 0;
  public playerResult = 0;
  public playerChoose = '';
  public computerChoose = '';

  constructor() {
  }

  // Choises:
  // Paper = 0
  // Rock = 1
  // Scissors = 2

  choosePaper() {
    this.playerChoise = 0;
    this.playerChoose = 'Paper';

    // Generate computer random response
    this.computerChoise = Math.round(Math.random() * 2);

    //Show computer Choose
    if(this.computerChoise === 0){
      this.computerChoose = 'Paper';
    }else if(this.computerChoise === 1){
      this.computerChoose = 'Rock'
    }else if(this.computerChoise === 2){
      this.computerChoose = 'Scissors';
    }

    // Choose winner
    if (this.computerChoise === this.playerChoise) {
      prompt('Equals :(');
    } else if (this.computerChoise === 1) {
      this.playerResult++;
      prompt('Has ganado!');
    } else if (this.computerChoise === 2) {
      this.computerResult++;
      prompt('He wins :(');
    }
  }

  chooseRock() {
    this.playerChoise = 1;
    this.playerChoose = 'Rock';

    // Generate computer random response
    this.computerChoise = Math.round(Math.random() * 2);

    //Show computer Choose
    if(this.computerChoise === 0){
      this.computerChoose = 'Paper';
    }else if(this.computerChoise === 1){
      this.computerChoose = 'Rock'
    }else if(this.computerChoise === 2){
      this.computerChoose = 'Scissors';
    }

    // Choose winner
    if (this.computerChoise === this.playerChoise) {
      prompt('Equals :(');
    } else if (this.computerChoise === 0) {
      this.computerResult++;
      prompt('He wins!');
    } else if (this.computerChoise === 2) {
      this.playerResult++;
      prompt('You win');
    }
  }

  chooseScissors() {
    this.playerChoise = 2;
    this.playerChoose = 'Scissors';

    // Generate computer random response
    this.computerChoise = Math.round(Math.random() * 2);

    //Show computer Choose
    if(this.computerChoise === 0){
      this.computerChoose = 'Paper';
    }else if(this.computerChoise === 1){
      this.computerChoose = 'Rock'
    }else if(this.computerChoise === 2){
      this.computerChoose = 'Scissors';
    }

    // Choose winner
    if (this.computerChoise === this.playerChoise) {
      prompt('Equals :(');
    } else if (this.computerChoise === 0) {
      this.playerResult++;
      prompt('you win');
    } else if (this.computerChoise === 1) {
      this.computerResult++;
      prompt('He win');
    }
  }

  ngOnInit(): void {
  }
}
