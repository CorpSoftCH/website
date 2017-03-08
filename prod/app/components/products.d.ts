import { ProduktService } from '../services/produkte-service.ts';
/**
 * Diese Komponente wird für die Produkte-Page verwendet
 */
export declare class ProductsComponent {
    private service;
    sections: any;
    constructor(service: ProduktService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setBtnBottom(): void;
    fixHoehe(): void;
    goTo(ziel: string): void;
}
