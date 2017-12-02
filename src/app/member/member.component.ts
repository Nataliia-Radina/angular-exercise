import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent implements OnInit {
  @Input() team:Team;

    constructor() {
    }

  ngOnInit() {
  }
}
