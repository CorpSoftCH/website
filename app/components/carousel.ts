import {Component, Input} from '@angular/core';

import {ItemService} from 'app/services/item-service';

@Component({
  selector: 'coso-carousel',
  templateUrl: 'app/templates/carousel.html',
  providers: [ItemService]
})
export class CarouselComponent {

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
        console.log("activate!!!")
        try{
            this.items[0].state = "active";
            console.log(this.items[0].state);
        } catch (err) {
            console.log("catch activate")
        }
		
	}

    move(id: string, value: string) {
        $('#' + id).carousel(value);
    }

}