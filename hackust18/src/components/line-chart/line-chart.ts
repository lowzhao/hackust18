import { Component,ViewChild } from '@angular/core';
// import { Chart } from 'chart.js';


/**
 * Generated class for the LineChartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'line-chart',
  templateUrl: 'line-chart.html'
})
export class LineChartComponent {
	// @ViewChild('lineChart') lineCanvas;
  text: string;

  constructor() {
    console.log('Hello LineChartComponent Component');
    this.text = 'Hello World';
  }

//   stackedLine = new Chart(this.lineCanvas.nativeElement, {
//     type: 'line',
//     data: [200000,2000000,100000,2000000],
//     options: {
//         scales: {
//             yAxes: [{
//                 stacked: true
//             }]
//         }
//     }
// });

}
