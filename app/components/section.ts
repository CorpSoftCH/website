import {Component} from '@angular/core';
import { SectionService } from 'app/services/section-service';

@Component({
  selector: 'coso-section',
  templateUrl: 'app/templates/sections.html',
  providers: [SectionService]
})
export class SectionComponent {

    sections: Section[];
	  constructor( private sectionService: SectionService) {	
		  this.sections = sectionService.getSections();
    }


}