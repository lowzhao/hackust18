import { NgModule } from '@angular/core';
import { AddGoalComponent } from './add-goal/add-goal';
import { LineChartComponent } from './line-chart/line-chart';
@NgModule({
	declarations: [AddGoalComponent,
    LineChartComponent],
	imports: [],
	exports: [AddGoalComponent,
    LineChartComponent]
})
export class ComponentsModule {}
