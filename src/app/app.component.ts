import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RULES';
  score = 0;
  showRules = false;

  ngOnInit() {
    this.score = 0;
  }
  /* Count score */
  setAttempts($event: number) {
    this.score = $event;
  }
  /* Show dailog with rules on button click */
  onRulesOpen() {
    this.showRules = true;
  }
  /* Close dialog with rules on button click */
  onClose($event: boolean) {
    if ($event) {
      this.showRules = false;
    }
  }
}
