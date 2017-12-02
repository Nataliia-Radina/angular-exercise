import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppService } from './app.service';



import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    TeamComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [AppService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
