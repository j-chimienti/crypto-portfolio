export class SortedTable {

  public sortBy = 'rank';

  public ascending = true;

  public data: Array<any> = [];

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
