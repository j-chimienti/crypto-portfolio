import {Coin} from './coin';

export class SortedTable {


    public sortBy = 'rank';

    public ascending = true;

    public coins: Coin[] = [];


    public handleNewSort(param) {

        this.ascending = !this.ascending;

        this.sortBy = param;
    }

    sortedCoins() {


        return this.coins.sort((a, b) => {
            return this.ascending ? a[this.sortBy] - b[this.sortBy] : b[this.sortBy] - a[this.sortBy];
        });
    }

}
