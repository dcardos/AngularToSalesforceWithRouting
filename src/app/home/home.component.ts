import { Component, OnInit } from '@angular/core';
import { SalesforceService } from '../util/salesforce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  author = 'Danilo';

  constructor(private sfService: SalesforceService) { }

  ngOnInit(): void {
    this.sfService.remoteAction('AngularToSFController.helloAngular', [JSON.stringify(this.author)]).subscribe(resp => {
      console.log(resp);
    });
  }
}
