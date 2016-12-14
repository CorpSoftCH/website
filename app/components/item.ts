import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ItemService} from 'app/services/item-service';

@Component({
  selector: 'coso-items',
  templateUrl: 'app/templates/item.html',
  directives: [ ROUTER_DIRECTIVES],
  providers: [ItemService]
})
export default class ItemComponent {


    @Input() contentName: string;
    items: Array<Item>;
    service: ItemService;

	constructor(
        private itemService: ItemService
    ) {
        this.service = itemService;
	}

    ngOnInit() {
        this.items = this.service.getItems(this.contentName);
    }
}