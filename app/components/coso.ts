import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {SectionService} from 'app/services/section-service';

import HeaderComponent from './header';
import ItemComponent from './item';
import CarouselComponent from './carousel';
import MapComponent from './map';

@Component({
	selector: 'coso',
	templateUrl: 'app/templates/coso.html',
	directives: [ ROUTER_DIRECTIVES, HeaderComponent, ItemComponent, CarouselComponent, MapComponent],
	providers: [SectionService],
	precompile: []
	})
export default class CosoComponent {

	sections: Section[] = [];

	constructor( private sectionService: SectionService) {	
		this.sections = sectionService.getSections();
	}
	
}