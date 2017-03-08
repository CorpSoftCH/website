import { ItemService } from '../services/item-service.ts';
/**
 * Diese Komponente wird eingesetzt, wenn ein Carousel gebraucht wird.
 */
export declare class CarouselComponent {
    private itemService;
    contentName: string;
    service: any;
    items: any;
    /**
     * Im Konstruktor wird der Service geladen, welcher die Items zur verfügung stellt.
     */
    constructor(itemService: ItemService);
    /**
     * Bei der Initialisierung wird das items Array mit den Items gefüllt und das erste Element wird aktiviert.
     */
    private ngOnInit();
    /**
     * In dieser Methode wird der Status des ersten Items auf aktiv gesetzt.
     */
    private activateFirst();
    /**
     * Diese Methode wird aufgerufen, wenn die Pfeil-Icons des Carousels benutzt wurden.
     * Diese führt dann die carousel-Funktion von Bootstrap aus, welche die Bewegung des Carousels entspricht.
     */
    private move(id, value);
    ngAfterViewInit(): void;
    private fixHoehe(myclass, offset);
}
