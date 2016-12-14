import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ProduktService} from 'app/services/produkte-service';

@Component({
  selector: 'coso-produkte',
  templateUrl: 'app/templates/produkte.html',
  directives: [ ROUTER_DIRECTIVES],
  providers: [ProduktService]
})
export default class ProduktComponent {


    @Input() contentName: string;
    produkte: Array<Produkt>;
    service: ProduktService;

	constructor(
        private produkteService: ProduktService
    ) {
        this.service = produkteService;
	}

    ngOnInit() {
        this.produkte = this.service.getProdukte(this.contentName);
        console.log(this.produkte);
    }
}