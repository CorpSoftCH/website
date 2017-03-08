import { SectionService, Section } from '../services/section-service.ts';
/**
 * Diese Komponente ist eine Containerkomponente für die anderen Contentkomponenten.
 */
export declare class ServicesComponent {
    private sectionService;
    sections: Section[];
    /**
     * Im Konstruktor wird der Service geladen, welcher die Sektionen liefert.
     */
    constructor(sectionService: SectionService);
}
