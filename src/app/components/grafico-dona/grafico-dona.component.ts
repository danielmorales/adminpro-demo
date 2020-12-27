import { Component, Input, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {


      // Doughnut
      @Input('chartLabels') doughnutChartLabels: Label[] = [];
      @Input('chartData') doughnutChartData: MultiDataSet = [];
      @Input('chartType') doughnutChartType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
