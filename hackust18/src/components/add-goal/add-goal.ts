import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { clamp, isTrueProperty } from '../../util/util';
import { Config } from '../../config/config';
import { DomController } from '../../platform/dom-controller';
import { Form } from '../../util/form';
import { Haptic } from '../../tap-click/haptic';
import { BaseInput } from '../../util/base-input';
import { Item } from '../item/item';
import { Platform } from '../../platform/platform';
import { PointerCoordinates, pointerCoord } from '../../util/dom';
import { UIEventManager } from '../../gestures/ui-event-manager';



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
