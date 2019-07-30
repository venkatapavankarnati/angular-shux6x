import { Injectable } from '@angular/core';
//
@Injectable()
export class DataService {
    // The climate of New York
    // https://en.wikipedia.org/wiki/Climate_of_New_York
    getData() {
        return [
            { month: 'Jan', temperature: -5.2},
            { month: 'Feb', temperature: -3.4 },
            { month: 'Mar', temperature: 1.7},
            { month: 'Apr', temperature: 8.8 },
            { month: 'May', temperature: 14.6},
            { month: 'Jun', temperature: 19.6},
            { month: 'Jul', temperature: 22.1},
            { month: 'Aug', temperature: 21.2},
            { month: 'Sep', temperature: 16.6},
            { month: 'Oct', temperature: 9.8},
            { month: 'Nov', temperature: 4.3},
            { month: 'Dec', temperature: -1.9}
        ];
    }
}