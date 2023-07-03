import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() user: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && !changes.user.firstChange) {
      // Perform actions when 'user' property changes
      console.log('User changed:', changes.user.currentValue);
      console.log('changes', changes);
    }
    console.log('chnage');
  }
}
