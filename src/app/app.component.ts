import { Component } from '@angular/core';
import { DataService } from './app.data';
import { Inject} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title = "SandBox";
  temp:any;
  data: any[];
      constructor(dataService: DataService){
        this.data = dataService.getData();
        this.temp = this.data[0].temperature; 
        for(var data1 of this.data)
        {
          if(data1.temperature === 1.7)
          console.log(data1.temperature);
        }
}
}
