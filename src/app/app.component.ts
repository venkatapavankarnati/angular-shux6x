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
  data: any[];
      constructor(dataService: DataService){
        this.data = dataService.getData(); 
        for(var data1 of this.data)
        {
          console.log(data1.temperature);
        }
}
}
