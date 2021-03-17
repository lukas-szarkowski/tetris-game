import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Player } from '../app.component';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  @Input() players: Array<Player>;
  @Output() clearList = new EventEmitter<void>();
  @Output() removeAtIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clear() {
    this.clearList.emit();
  }

  remove(index) {
    this.removeAtIndex.emit(index);
  }

}
