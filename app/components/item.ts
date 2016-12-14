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

    deactivateOthers(elements: Array<any> , ignoreElement: any) { //Das aktuelle Element darf noch nicht deaktiviert werden, damit der User es deaktivieren kann.
		for(let value of elements) {
			if(value.active && value != ignoreElement) {
				this.changeView(value);
			}
		}
	}


    changeView(element:any): void  {
    	element.active = !element.active;
    	element.changeOperator();
		
		$("#text-" + element.id ).toggleClass("hide");
		//$("#arrow-" + element.id ).toggleClass("hide");
		$("#item-" + element.id ).toggleClass("active");
		//$("#field-" + element.id ).toggleClass("hide"); //notlösung

		/*
		$(".item-").removeClass("col-sm-8");
		$(".field").removeClass("col-xs-6");
		$(".text").removeClass("col-xs-6");

		$(".text").removeClass("rightElement");
		$(".text").removeClass("oneRow");
		$(".special").removeClass("special");
		*/
		//$("#item-" + element.id ).addClass("col-xs-6 col-sm-4");
		
		
		/*
		if(this.itemRows == 1) {
			$("#text-" + element.id ).addClass("oneRow");
		} else if (index%this.itemRows == 0 && element.active) {
			$("#text-" + element.id ).addClass("rightElement");
			if(index+this.itemRows-2 < this.angebote.length) {
				var spez = this.angebote[index+this.itemRows -2];
				$("#item-" + spez.id).addClass("special");
			}
		} else {
			$("#item-" + element.id ).addClass("col-sm-8");
			$("#item-" + element.id ).removeClass("col-xs-6 col-sm-4");
			$("#field-" + element.id ).addClass("col-xs-6");
			$("#text-" + element.id ).addClass("col-xs-6");
		}*/
    }
}

