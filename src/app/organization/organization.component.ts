import { Component, OnInit  } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})

export class OrganizationComponent  implements OnInit {


  constructor(private _appService:AppService) {
  }

  private organization;
  private errorMessage:any = '';

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization() {
    this._appService.getData()
        .subscribe(
            organization => this.organization = organization,
            error => this.errorMessage = <any>error,
        );
  }

}
