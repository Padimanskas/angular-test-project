import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'query-item',
  templateUrl: './query-item.component.html',
  styleUrls: ['./query-item.component.scss']
})

export class QueryItemComponent {

	@Input() item: any;
	@Output() delete = new EventEmitter();

	onDelete() {
		this.delete.emit();
	}

}
