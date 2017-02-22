import {Component, Input} from '@angular/core';
import {ItemService} from 'app/services/item-service';

/**
 * Diese Komponente wird dort eingesetzt, wo die Items in Reihen auf der Page sind.
 */
@Component({
  selector: 'coso-items',
  templateUrl: 'app/templates/item.html',
  providers: [ItemService]
})
export class ItemComponent {

	//Als Input wird der Name der Items übergeben, und ob zu beginn nur die ersten oder schon Alle Items anggezeigt werden sollen.
    @Input() contentName: string;
	@Input() showOnlyTopItems: boolean;
	@Input() itemRows: number;
    
	TABLET: number =  768;
	MOBILE_LARGE: number = 640;
	MOBILE: number = 480;
	
	allItems: Array<Item>;
	showItems: Array<Item>;
	topItems: Array<Item> = [];
    service: ItemService;

	/**
	 * Im Konstruktor wird der Service geladen, welcher die Items zur verfügung stellt.
	 */
	constructor(
        private itemService: ItemService
    ) {
        this.service = itemService;
	}

	/**
	 * Bei der Initialisierung werden die Items in die Arrays geladen.
	 * Ebenfalls wird ermittelt, wie viele Items in einer Reihe angezeigt werden sollen.
	 * Dies ist wichtig, weil sich die Items je nach Anzahl in einer Reihe unterschiedlich verhalten.
	 */
    private ngOnInit() {
        this.allItems = this.service.getItems(this.contentName);
		this.showItems = this.allItems;

		for (var i = 0; i < this.itemRows; i++) {
			try {this.topItems[i] = this.allItems[i];}
			catch (err) {console.log("catch topitem")}
		}
		
		
	}
	private ngAfterViewInit() {
		try {
			if(this.showOnlyTopItems[0]) {
				this.showItems = this.topItems;
				$("#showMoreLessButtons-" + this.contentName[0]).removeClass("hide");
			}
		} catch (err) {console.log("catch more/less Buttons")} 

	}
	/**
	 * Nachdem der Kontent initialisiert wurde, werden dort, wo nur die TopItems dargestellt werden Buttens sichtbar gemacht,
	 * um die anderen Items sichtbar machen zu können.
	 */
	private ngAfterContentChecked() {
		this.setItemsPerRow(window.innerWidth);		
	}

	private ngAfterViewChecked() {
      var prd = $(".produkt .text");
      prd = [...prd];
	  console.log(prd);
      var height = 0;
      for(let e of prd) {
        if (e.offsetHeight > height) {
          height = e.offsetHeight;
        }
      }
      for(let e of prd) {
        e.style.height = height + "px";
      }
    }

	private goToTop() {
		$('html,body').scrollTop(0);
	}

	/**
	 * Beim aktivieren eines Items werden zuerst alle anderen deaktiviert, damit der Fokus immer nur auf einem Item bleibt.
	 */
    private deactivateOthers(elements: Array<any> , ignoreElement: any) { //Das aktuelle Element darf noch nicht deaktiviert werden, damit der User es deaktivieren kann.
		for(let value of elements) {
			if(value.isActive() && value != ignoreElement) {
				this.changeView(value, 0);
			}
		}
	}
	/**
	 * Hier werden die Items per Reihe gesetzt.
	 */
	private setItemsPerRow(size: number) {
		var value: number;
		if (size > this.TABLET && this.itemRows == 3) {
			value = 3;
		} else {
			value = 4;
		}
		if (size < this.TABLET) {
			value = 2;
		}
		if (size <= this.MOBILE) {
			value = 1;
		}

		for(let element of this.allItems) {
			if(this.itemRows == 4){
				$("#item-" + element.id ).addClass("col-sm-6 col-lg-3");
			} else if (this.itemRows == 3) {
				$("#item-" + element.id ).addClass("col-md-4");
			} else if (this.itemRows == 6) {
				$("#item-" + element.id ).addClass("col-xs-3 col-sm-2 col-md-2");
			}
		}

		this.updateRightElements(value);
  	}
	/**
	 * Hier werden die sich am rechten Rand befindenden Items markiert.
	 */
	private updateRightElements(value: number) {
		try {
			for(var index = 0; index < this.showItems.length; index++) {
				if((index+1)%value == 0) {
					this.showItems[index].setAsRightElement(true);
				} else {
					this.showItems[index].setAsRightElement(false);
				}
			}
		} catch (err) {}
	}

	/**
	 * Hier wird die Ansicht der Items geändert.
	 * @element welches Element das geändert wird.
	 * @index das wievielte Element es ist.
	 */
    private changeView(element:any, index:number): void  {
		if(element.isActive()) {
			element.setActive(false);
		} else {
			element.setActive(true);
		}
		
		$("#text-" + element.id ).toggleClass("hide");
		$("#arrow-" + element.id ).toggleClass("hide");
		$("#item-" + element.id ).toggleClass("active");

		/*if(element.isActive() && !element.isRightElement()) {
			/*$("#item-" + element.id ).addClass("col-sm-8");
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
			/*$("#item-" + element.id ).removeClass("col-sm-8");
			$("#item-" + element.id ).addClass("col-xs-6 col-sm-4");
			$("#field-" + element.id ).removeClass("col-xs-6");
			$("#text-" + element.id ).removeClass("col-xs-6");
			

			$(".item").removeClass("special");
			$(".text").removeClass("rightElement");

		}*/
    }
	/**
	 * Das Wechseln von wenigen Items zu allen Items
	 */
	private moreItems(): void  {
		this.showItems = this.allItems;
		$(".moreItems").toggleClass("hide");
		$(".lessItems").toggleClass("hide");
	}
	/**
	 * Das Wechseln von allen Items zu wenigen Items.
	 */
	private lessItems(): void  {
		this.showItems = this.topItems;
		$(".moreItems").toggleClass("hide");
		$(".lessItems").toggleClass("hide");
	}

	

}

