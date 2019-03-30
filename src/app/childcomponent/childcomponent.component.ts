import { Component, OnInit } from '@angular/core';
import { AppService } from '../appservice.service';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  count: number;

  constructor(private appsevice: AppService) {
  }
  ngOnInit() {

    this.appsevice.count.subscribe(c => {
       this.count = c;
    });
  }
  nextCount() {
   this.appsevice.nextCount();
  }

}
