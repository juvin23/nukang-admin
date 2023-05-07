import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent{

    Highcharts: typeof Highcharts = Highcharts;
    
    chartOptions: Highcharts.Options = {
      title: {
          text: 'Transaction On Nukang.Com this years',
          align: 'center'
      },
      yAxis: {
        title: {
            text: 'Number of User Transaction'
        }
      },
      xAxis: {
        categories:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Ags","Sep","Okt","Nov","Des"]
      },
      series: [{
        name: 'User Transaction',
        data: [1 , 21 , 11 , 5 , 7 , 10 , 12 , 9 , 10 , 11 , 33 , 20],
        type: 'line'
      }]
    };

    ngOnInit(): void{ 
      
    }
}
