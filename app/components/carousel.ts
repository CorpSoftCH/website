import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ItemService} from 'app/services/item-service';

@Component({
  selector: 'coso-carousel',
  templateUrl: 'app/templates/carousel.html',
  directives: [ ROUTER_DIRECTIVES],
  providers: [ItemService]
})
export default class CarouselComponent {

    @Input() contentName: string;

    service: any;
    items: any;

	constructor(
        private itemService: ItemService) {
        this.service = itemService;
	}

    ngOnInit() {
        this.items = this.service.getItems(this.contentName);
        this.activateFirst();
    }

    activateFirst(): void  {
		this.items[0].state = "active";
	}

}