import { Component, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-contact-chart',
  templateUrl: './contact-chart.component.html',
  styleUrls: ['./contact-chart.component.scss'],
})
export class ContactChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [68, 31.5],
      chart: {
        height: 200,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          track: {
            background: '#E5E5EF',
          },
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'جهاز',
              formatter: function (w) {
                return '158';
              },
            },
          },
        },
      },
      labels: ['الخيار الأول', 'الخيار الثاني'],
    };
  }
}
