import { Component } from '@angular/core';
import { SalesforceService } from './util/salesforce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-to-salesforce';

  constructor(private sfService: SalesforceService) { }

  getSFResourse = (path: string) => {
    return this.sfService.getResource(path);
  };
}
