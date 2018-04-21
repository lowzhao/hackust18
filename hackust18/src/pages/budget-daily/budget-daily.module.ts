import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetDailyPage } from './budget-daily';

@NgModule({
  declarations: [
    BudgetDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetDailyPage),
  ],
})
export class BudgetDailyPageModule {}
