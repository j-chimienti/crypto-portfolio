import {OnInit} from '@angular/core';

export class SortedTable implements OnInit {

  public sortBy = 'rank';

  public ascending = true;

  public data: any;

  public timeFrames = ['7d', '1h', '24h'];

  public input = {
    currentTimeFrame: '24h'
  };

  ngOnInit(): void {
    const tf = localStorage.getItem('@CURRENT_TIMEFRAME');

    if (!this.timeFrames.includes(tf)) {

      this.input.currentTimeFrame = '24h';
    } else {

      this.input.currentTimeFrame = tf;
    }

  }

  public setTimeFrame(ft) {

    this.input.currentTimeFrame = ft;

  }

  public handleNewSort(param): void {

    this.ascending = !this.ascending;

    this.sortBy = param;
  }

  public sortedData(): Array<any> {


    return this.data.sort((a, b) => {
      return this.ascending ? a[this.sortBy] - b[this.sortBy] : b[this.sortBy] - a[this.sortBy];
    });
  }


}
