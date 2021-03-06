import {Component} from '@angular/core';
import { SectionService, Section } from '../services/section-service.ts';

/**
 * Diese Komponente ist eine Containerkomponente für die anderen Contentkomponenten.
 */
@Component({
  templateUrl: 'app/templates/services.html',
  providers: [SectionService]
})
export class ServicesComponent {

    sections: Section[];
    /**
     * Im Konstruktor wird der Service geladen, welcher die Sektionen liefert.
     */
	  constructor( private sectionService: SectionService) {	
		  this.sections = sectionService.getServices();
    }
}