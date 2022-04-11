import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from 'src/app/goal';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() ingoal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
