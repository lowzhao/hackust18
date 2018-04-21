import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the GraphpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphpage',
  templateUrl: 'graphpage.html',
})
export class GraphpagePage {

    //@ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    //@ViewChild('lineCanvas') lineCanvas;
 
    //barChart: any;
    doughnutChart: any;
    //lineChart: any;

    x: any;
    p1: any;
    p2: any;
    p3: any;
    p4: any;
    p5: any;
    p6: any;
                

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  


  ionViewDidLoad() {
    //console.log('ionViewDidLoad GraphpagePage');
  		this.x = 500 + 165 + 150 + 100 + 65 + 50;
  		this.p1 = 100 * (500/this.x).toFixed(2);
  		this.p2 = 100 * (165/this.x).toFixed(2);
		this.p3 = 100 * (150/this.x).toFixed(2);
  		this.p4 = 100 * (100/this.x).toFixed(2);
  		this.p5 = 100 * (65/this.x).toFixed(2);
  		this.p6 = 100 * (50/this.x).toFixed(2);


        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 			
            type: 'doughnut',
            data: {
            	labels: ["Rent " + this.p1 + "% (HK$ "+ (this.p1*this.x/100).toFixed(2) + ")", 
            	"Groceries "+ this.p2 + "% (HK$ "+ (this.p2*this.x/100).toFixed(2) + ")", 
            	"Entertainment " + this.p3 + "% (HK$ "+ (this.p3*this.x/100).toFixed(2) + ")", 
            	"Cell Phone " + this.p4 + "% (HK$ "+ (this.p4*this.x/100).toFixed(2) + ")", 
            	"Insurance " + this.p5 + "% (HK$ "+ (this.p5*this.x/100).toFixed(2) + ")", 
            	"Transportation "+ this.p6 + "% (HK$ "+ (this.p6*this.x/100).toFixed(2) + ")"],
                datasets: [{
                    label: '# of Votes',
                    data: [500, 165, 150, 100, 65, 50],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            },
            options : {
            maintainAspectRatio: false,
            layout: {
               padding: {
                  left     : 0,
                  right    : 0,
                  top      : 0,
                  bottom   : 0
               }
            },
            animation: {
               duration : 500
            }
         }
 
        });

  }



}
