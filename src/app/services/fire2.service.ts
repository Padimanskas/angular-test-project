import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class Fire2Service {

	public list: FirebaseListObservable<any>;

	constructor(public db: AngularFireDatabase) { 
	    this.list = db.list('https://angular-test-project-20a24.firebaseio.com/search-request');
	}

	add(value){
		this.list.push(value);
	}

	delete(value){
		this.list.remove(value);
	}

	getListInstance(){
		return this.list;
	}

}
