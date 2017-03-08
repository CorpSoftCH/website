import {Component, Input} from '@angular/core';
import {ItemService, Item} from '../services/item-service.ts';
//import  * as $ from 'jquery';

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
	@Input() showOnlyTopItems: Array<boolean>;
	@Input() itemRows: number;
    
	XTRA_LARGE: number = 1200;
	LARGE: number = 992;
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

		this.fixHoehe();

	}
	/**
	 * Nachdem der Kontent initialisiert wurde, werden dort, wo nur die TopItems dargestellt werden Buttens sichtbar gemacht,
	 * um die anderen Items sichtbar machen zu können.
	 */
	private ngAfterContentChecked() {
		this.setItemsPerRow(window.innerWidth);		
	}

	private showDetailAngebote(i:any, index: number) {
		for(let item of this.allItems) {
			$("#item-" + item.id).addClass("inactive");
			$("#title-" + item.id).removeClass("hide");
		}
		$("#item-" + i.id).removeClass("inactive");
		let nextRightItem = this.nextRightElement(index);
		$("#angebote-details").remove();
		$("#item-" + nextRightItem.id).after("<div class='col-xs-12' id='angebote-details'></div>");
		$(".arrow").addClass("hide");
		$("#arrow-" + i.id ).toggleClass("hide");
		//$("#title-" + i.id).addClass("hide");

		if(i.isActive()) {
			i.setActive(false);
			for(let item of this.allItems) {
				$("#item-" + item.id).removeClass("inactive");
				$("#arrow-" + item.id ).addClass("hide");
			}
			$("#title-" + i.id).removeClass("hide");
		} else {
			for(let item of this.allItems) {
				item.setActive(false);
			}
			i.setActive(true);
			$("#angebote-details").append("<div class='text' id='text-" + i.id + "'><h3>" + i.titles[0] + "</h3></div>");

			for(let para of i.contentStrings) {
				$("#text-" + i.id).append("<p>" + para + "</p>");
			}
			$("#angebote-details").append("<ul id='ul-1-" + i.id + "' class='col-sm-4'></ul>");
			$("#angebote-details").append("<ul id='ul-2-" + i.id + "' class='col-sm-4'></ul>");
			$("#angebote-details").append("<ul id='ul-3-" + i.id + "' class='col-sm-4'></ul>");
			
			$("#ul-1-" + i.id).append("<p class='ueberschrift'>Wir helfen Ihnen bei:</p>");
			for(let li of i.specialStrings) {
				$("#ul-1-" + i.id).append("<li><p>" + li + "</p></li>");
			}
			$("#ul-2-" + i.id).append("<p class='ueberschrift'>Profitieren Sie von:</p>");
			for(let li of i.specialStrings2) {
				$("#ul-2-" + i.id).append("<li><p>" + li + "</p></li>");
			}
			$("#ul-3-" + i.id).append("<p class='ueberschrift'>Wir arbeiten mit:</p>");
			for(let li of i.specialStrings3) {
				$("#ul-3-" + i.id).append("<li><p>" + li + "</p></li>");
			}
		}
	}

	private showDetailTeam(i:any, index: number) {
		for(let item of this.allItems) {
			$("#item-" + item.id).addClass("inactive");
		}
		$("#item-" + i.id).removeClass("inactive");
		let nextRightItem = this.nextRightElement(index);
		$("#team-details").remove();
		$("#item-" + nextRightItem.id).after("<div class='col-xs-12' id='team-details'></div>");
		$(".arrow").addClass("hide");
		$("#arrow-" + i.id ).toggleClass("hide");

		if(i.isActive()) {
			i.setActive(false);
			for(let item of this.allItems) {
				$("#item-" + item.id).removeClass("inactive");
				$("#arrow-" + item.id ).addClass("hide");
			}
		} else {
			i.setActive(true);
			$("#team-details").append("<div id='container'></div>");
			
			
			$("#container").append("<div class='img-c col-sm-6'><img class='portrait' src='" + i.imgPath + "'></div><div class='text col-sm-6' id='text-" + i.id + "'></div>");
			for(let para of i.contentStrings) {
				$("#text-" + i.id).append("<p>" + para + "</p>");
			}

			if(index < this.showItems.length - 1) {
				$("#text-" + i.id).append(`
					<!--<ul id='ul-"` + i.id + `"'>-->
						<a href="mailto:` + i.specialStrings[0] + `">Email an ` + i.titles[0] + `</a><br />
						<a href="` + i.specialStrings[1] + `">vCard von  ` + i.titles[0] + `</a>
					<!--</ul>-->`
				);
			}
		}
	}

	private nextRightElement(index: number): any {
		if(index < this.showItems.length - 1) {
			if(this.showItems[index].isRightElement()) {
				return this.showItems[index];
			} else {
				return this.nextRightElement(index + 1);
			}
		} else {
			return this.showItems[index];
		}
	}

	private fixHoehe() {
	var prd:any = $(".produkt .text");
      prd = [...prd];
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
    /*private deactivateOthers(elements: Array<any> , ignoreElement: any) { //Das aktuelle Element darf noch nicht deaktiviert werden, damit der User es deaktivieren kann.
		console.log(ignoreElement.isRightElement());
		for(let value of elements) {
			if(value.isActive() && value != ignoreElement) {
				this.changeView(value, 0);
			}
		}
	}*/


	/**
	 * Hier werden die Items per Reihe gesetzt.
	 */
	private setItemsPerRow(size: number) {
		for(let element of this.allItems) {
			if(this.itemRows == 4){
				$("#item-" + element.id ).addClass("col-sm-6 col-md-3");
				if (size > this.LARGE) {
					this.updateRightElements(4);
				} else if (size > this.TABLET) {
					this.updateRightElements(2);
				} else {
					this.updateRightElements(1);
				}
			} else if (this.itemRows == 3) {
				$("#item-" + element.id ).addClass("col-md-4");
				this.updateRightElements(3);
			} else if (this.itemRows == 6) {
				$("#item-" + element.id ).addClass("col-xs-3 col-sm-2 col-md-2");
				if (size > this.TABLET) {
					this.updateRightElements(6);
				} else {
					this.updateRightElements(4);
				}
				
			}
		}

		
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
    /*private changeView(element:any, index:number): void  {
		if(element.isActive()) {
			element.setActive(false);
		} else {
			element.setActive(true);
		}
		
		$("#text-" + element.id ).toggleClass("hide");
		$("#arrow-" + element.id ).toggleClass("hide");
		$("#item-" + element.id ).toggleClass("active");
		
		
    }*/
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

