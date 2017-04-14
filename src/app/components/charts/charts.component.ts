// Core modules
import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {
  // get the data from parent
  @Input() assetParentData:any;

  // sets the date pipe
  private dPipe: DatePipe = new DatePipe('en-US');
  // prices to show at the chart
  private pricesToShow:Array<string> = [];
  // dates to show at the chart
  private datesToShow:Array<string> = [];
  // index of the latest graphic data loaded
  savedGraphIndex:number = 0;
  // invokes the chart render on template
  applyChart:boolean;

  constructor() {}
  // chart data
  public chartData:any[];
  public chartLabels:string[];
  // maximum number of records to show
  public chartMaxRecords:number = 14;
  // chart config
  public chartType:string = 'bar';
  public legendChart:boolean = false;
  public chartColors:Array<any> = [
    {
      backgroundColor: 'rgba(134, 203, 146, 1)',
      borderColor: 'rgba(113, 180, 141, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];

  // events
  public chartClicked(e:any):void {
  }

  public chartHovered(e:any):void {
  }

  ngOnInit() {
    this.getGraphData();
  }
  // get the data to show in a chart
  getGraphData() {
    let assetPrices = this.assetParentData;
    let count:number = 0;
    // starts at the latest record
    for (let i =  assetPrices.prices.length-1; i >= 0; i--) {
      count++;
      // format the data and save to arrays
      let formatted = this.dPipe.transform( assetPrices.prices[i].date, 'yyyy-MM-dd');
      this.datesToShow.push(formatted);
      this.pricesToShow.push( assetPrices.prices[i].value);
      if(count == this.chartMaxRecords ) {
        // save the latest index viewed
        this.savedGraphIndex = i;
        // set the prices to show
        this.chartData =  this.pricesToShow;
        // set the dates to show
        this.chartLabels =  this.datesToShow;
        // initialize
        count = 0;
        // show chart at the view
        this.applyChart = true;
        break;
      }
    }
  }
}
