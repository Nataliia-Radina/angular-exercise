import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../organization';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  @Input() organization:Organization;


  constructor() {
  }


  ngOnInit() {
  }

}
