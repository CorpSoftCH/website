import {Component} from '@angular/core';
import { SectionService } from 'app/services/section-service';

/**
 * Diese Komponente ist eine Containerkomponente für die anderen Contentkomponenten.
 */
@Component({
  selector: 'coso-sections',
  templateUrl: 'app/templates/sections.html',
  providers: [SectionService]
})
export class SectionComponent {

    sections: Section[];
    /**
     * Im Konstruktor wird der Service geladen, welcher die Sektionen liefert.
     */
	  constructor( private sectionService: SectionService) {	
		  this.sections = sectionService.getSections();
    }
}