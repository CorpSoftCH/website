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
	@Input() showOnlyTopItems: boolean;
    
	TABLET: number =  768;
	MOBILE_LARGE: number = 640;
	MOBILE: number = 480;
	
	allItems: Array<Item>;
	showItems: Array<Item>;
	topItems: Array<Item> = [];
    service: ItemService;
	itemRows: number = 3;


	constructor(
        private itemService: ItemService
    ) {
        this.service = itemService;
		window.onresize = () => {
			this.setItemsPerRow(window.innerWidth);
    	};
	}

    ngOnInit() {
        this.allItems = this.service.getItems(this.contentName);
		this.showItems = this.allItems;
		for (var i = 0; i < this.itemRows; i++) {
			this.topItems[i] = this.allItems[i];
		}
		this.setItemsPerRow(window.innerWidth);
		
	}

	ngAfterViewInit() {
		if(this.showOnlyTopItems[0]) {
			this.showItems = this.topItems;
			$(".showMoreLessButtons-" + this.contentName[0]).removeClass("hide");
		}
		
	}

    deactivateOthers(elements: Array<any> , ignoreElement: any) { //Das aktuelle Element darf noch nicht deaktiviert werden, damit der User es deaktivieren kann.
		for(let value of elements) {
			if(value.isActive() && value != ignoreElement) {
				this.changeView(value, 0);
			}
		}
	}

	private setItemsPerRow(size: number) {
		if (size > this.TABLET) {
			this.itemRows = 3;
		}
		if (size < this.TABLET) {
			this.itemRows = 2;
		}

		if (size <= this.MOBILE) {
			this.itemRows = 1;
		}
		this.updateRightElements();
  	}

	private updateRightElements() {
		for(var index = 0; index < this.showItems.length; index++) {
			if((index+1)%this.itemRows == 0) {
				this.showItems[index].setAsRightElement(true);
			} else {
				this.showItems[index].setAsRightElement(false);
			}
		}
	}


    changeView(element:any, index:number): void  {
		if(element.isActive()) {
			element.setActive(false);
		} else {
			element.setActive(true);
		}
		
		$("#text-" + element.id ).toggleClass("hide");
		//$("#arrow-" + element.id ).toggleClass("hide");
		$("#item-" + element.id ).toggleClass("active");

		if(element.isActive() && !element.isRightElement()) {
			$("#item-" + element.id ).addClass("col-sm-8");
			$("#item-" + element.id ).removeClass("col-xs-6 col-sm-4");
			$("#field-" + element.id ).addClass("col-xs-6");
			$("#text-" + element.id ).addClass("col-xs-6 moveLeftShow");
		} else if(element.isActive() && element.isRightElement() && this.itemRows > 1) {
			//letztem Element wird die Position nicht absolute (Text ragt nicht über die Section)
			if (element != this.showItems[this.showItems.length -1]) {
				$("#text-" + element.id ).addClass("rightElement");

			}
			if(index < this.showItems.length - this.itemRows) {
				var spezEle = this.showItems[index-1+this.itemRows];
				$("#item-" + spezEle.id).addClass("special"); 
			}
			$("#text-" + element.id ).addClass("moveDownShow");
		} else {
			$("#item-" + element.id ).removeClass("col-sm-8");
			$("#item-" + element.id ).addClass("col-xs-6 col-sm-4");
			$("#field-" + element.id ).removeClass("col-xs-6");
			$("#text-" + element.id ).removeClass("col-xs-6");
			

			$(".item").removeClass("special");
			$(".text").removeClass("rightElement");

		}
    }

	public moreItems(): void  {
		this.showItems = this.allItems;
		$(".moreItems").toggleClass("hide");
		$(".lessItems").toggleClass("hide");
	}

	public lessItems(): void  {
		this.showItems = this.topItems;
		$(".moreItems").toggleClass("hide");
		$(".lessItems").toggleClass("hide");
	}

}

