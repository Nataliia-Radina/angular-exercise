import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translatey(0)'})),
      transition('void => *', [
        style({transform: 'translatey(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translatey(100%)'}))
      ])
    ])
  ]
})

export class MemberComponent implements OnInit {
  title = "Members:";

  @Input() team:Team;

    constructor() {
    }

  ngOnInit() {
  }

}

