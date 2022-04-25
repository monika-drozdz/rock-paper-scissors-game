import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  /* Check if user made a choice */
  isPicked: boolean;
  /* Signal selected by user */
  selectedByUser: string;
  /* Signal selected randomly by computer */
  selectedByComputer: string;
  /* List of all available options to select */
  availableSelection = ['paper', 'scissors', 'rock'];
  /* Check if user win */
  userWin: boolean;
  /* Check if it's a draw */
  isDraw: boolean;
  /* Message of button */
  btnMessage = 'PLAY AGAIN';
  /* Users score */
  score: number;
  /* Event emitter for scores */
  @Output() scores = new EventEmitter();

  constructor() {}

  /* Component initialization */
  ngOnInit(): void {
    this.isPicked = false;
    this.isDraw = false;
    this.userWin = false;
    this.score = 0;
  }

  /* Check user and computer selection */
  onPicked(type: string) {
    this.selectedByUser = type;
    this.selectedByComputer =
      this.availableSelection[
        Math.floor(Math.random() * this.availableSelection.length)
      ];

    this.checkWinner(this.selectedByUser, this.selectedByComputer);
    this.isPicked = true;
  }

  /* Check the winner */
  checkWinner(userSelection: string, computerSelection: string) {
    if (userSelection === computerSelection) {
      this.userWin = false;
      this.isDraw = true;
    } else if (userSelection === 'paper') {
      computerSelection === 'rock'
        ? (this.userWin = true)
        : (this.userWin = false);
    } else if (userSelection === 'rock') {
      computerSelection === 'scissors'
        ? (this.userWin = true)
        : (this.userWin = false);
    } else if (userSelection === 'scissors') {
      computerSelection === 'paper'
        ? (this.userWin = true)
        : (this.userWin = false);
    }
    if (!this.isDraw) {
      this.userWin
        ? (this.score += 1)
        : this.score === 0
        ? this.score
        : (this.score -= 1);
    } else return;

    this.scores.emit(this.score);
  }
  /* Play again */
  onPlayAgain() {
    this.isPicked = false;
    this.isDraw = false;
    this.userWin = false;
  }
}
