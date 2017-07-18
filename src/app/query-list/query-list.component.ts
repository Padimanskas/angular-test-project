import { Component, OnInit } from '@angular/core';
import { Fire2Service } from '../services/fire2.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})

export class QueryListComponent implements OnInit {

	public list: FirebaseListObservable<any>;

	reversedItems: Array<any> = [];

	searchHistory: Number = 0;

	constructor(public fire2Service: Fire2Service){}

	delete(item){
		this.fire2Service.delete(item);
	}

	ngOnInit(): void {
		this.list = this.fire2Service.getListInstance();

		this.list.subscribe((item)=>{
	    	this.reversedItems = item.slice();
	    	this.reversedItems.reverse();
	    	this.searchHistory = this.reversedItems.length;
	    });

	}

}
