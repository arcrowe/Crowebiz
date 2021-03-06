import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../main/main.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
