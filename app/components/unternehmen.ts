import {Component, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {UnternehmenService} from 'app/services/unternehmen-service';

@Component({
  selector: 'coso-unternehmen',
  templateUrl: 'app/templates/unternehmen.html',
  directives: [ ROUTER_DIRECTIVES],
  providers: [UnternehmenService]
})
export default class ProduktComponent {


    @Input() contentName: string;
    unternehmen: Array<Unternehmen>;
    service: UnternehmenService;

	constructor(
        private unternehmenService: UnternehmenService
    ) {
        this.service = unternehmenService;
	}

    ngOnInit() {
        this.unternehmen = this.service.getUnternehmen(this.contentName);
        console.log(this.unternehmen);
    }
}