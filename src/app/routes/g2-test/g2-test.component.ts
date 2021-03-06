/**
 * Created by kkcra on 2019/1/16
 */
import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'g2-test',
  template: `
    <g2-pie
      [hasLegend]="true"
      title="销售额"
      subTitle="销售额"
      [total]="total"
      [valueFormat]="format"
      [data]="salesPieData"
      height="294"></g2-pie>
  `
})
export class G2TestComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('g2-pie view check.');
  }

  salesPieData = [
    {
      x: '家用电器',
      y: 4544,
    },
    {
      x: '食用酒水',
      y: 3321,
    },
    {
      x: '个护健康',
      y: 3113,
    },
    {
      x: '服饰箱包',
      y: 2341,
    },
    {
      x: '母婴产品',
      y: 1231,
    },
    {
      x: '其他',
      y: 1231,
    },
  ];
  total: string;

  ngOnInit(): void {
    this.total = `&yen ${this.salesPieData.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`;
  }

  format(val: number) {
    return `&yen ${val.toFixed(2)}`;
  }
}
