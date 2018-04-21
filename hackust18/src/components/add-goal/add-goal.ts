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
   structure: any = {lower: 33, upper: 60};
     onChange(ev: any) {
    console.log('Changed', ev);
  }
  
  constructor() {
    
  }

}
