import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'coso-item',
  templateUrl: 'app/templates/item.html',
  directives: [ ROUTER_DIRECTIVES],
})
export default class ItemComponent implements OnInit {


	constructor() {

	}

	ngOnInit() {}
}