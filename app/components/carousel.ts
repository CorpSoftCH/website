import {Component, Input} from '@angular/core';
import {ItemService} from 'app/services/item-service';

/**
 * Diese Komponente wird eingesetzt, wenn ein Carousel gebraucht wird.
 */
@Component({
  selector: 'coso-carousel',
  templateUrl: 'app/templates/carousel.html',
  providers: [ItemService]
})
export class CarouselComponent {

    //Als Input wird der Name der Items übergeben.
    @Input() contentName: string;

    service: any;
    items: any;

    /**
     * Im Konstruktor wird der Service geladen, welcher die Items zur verfügung stellt.
     */
	constructor(
        private itemService: ItemService) {
        this.service = itemService;
	}

    /**
     * Bei der Initialisierung wird das items Array mit den Items gefüllt und das erste Element wird aktiviert.
     */
    private ngOnInit() {
        this.items = this.service.getItems(this.contentName);
        this.activateFirst();
    }
     /**
      * In dieser Methode wird der Status des ersten Items auf aktiv gesetzt.
      */
    private activateFirst(): void  {
        try{
            this.items[0].state = "active";
        } catch (err) {
            console.log("catch activate")
        }
		
	}

    /**
     * Diese Methode wird aufgerufen, wenn die Pfeil-Icons des Carousels benutzt wurden.
     * Diese führt dann die carousel-Funktion von Bootstrap aus, welche die Bewegung des Carousels entspricht.
     */
    private move(id: string, value: string) {
        $('#' + id).carousel(value);
    }

    ngAfterViewInit() {
      var prd = $(".carousel");
      prd = [...prd];
      var height = 0;
      for(let e of prd) {
        if (e.offsetHeight > height) {
          height = e.offsetHeight;
        }
      }
      for(let e of prd) {
        e.style.height = height + 40 + "px";
      }
    }

}