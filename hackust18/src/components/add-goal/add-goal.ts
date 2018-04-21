import { Component } from '@angular/core';

/**
 * Generated class for the AddGoalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-goal',
  templateUrl: 'add-goal.html'
})
export class AddGoalComponent {

  text: string;

  constructor() {
    console.log('Hello AddGoalComponent Component');
    this.text = 'Hello World';
  }

}
