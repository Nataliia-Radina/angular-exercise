import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../organization';
import { Team } from '../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  title = "Our teams:";

  @Input() organization:Organization;

  team: Team;

  selectedTeam: Team;


  constructor() { }


  ngOnInit() {
  }

  onSelect(team: Team): void {
      this.selectedTeam =( this.selectedTeam === team ? undefined : team );

  }

}
