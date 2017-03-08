import { ItemService, Item } from '../services/item-service.ts';
/**
 * Diese Komponente wird dort eingesetzt, wo die Items in Reihen auf der Page sind.
 */
export declare class ItemComponent {
    private itemService;
    contentName: string;
    showOnlyTopItems: Array<boolean>;
    itemRows: number;
    XTRA_LARGE: number;
    LARGE: number;
    TABLET: number;
    MOBILE_LARGE: number;
    MOBILE: number;
    allItems: Array<Item>;
    showItems: Array<Item>;
    topItems: Array<Item>;
    service: ItemService;
    /**
     * Im Konstruktor wird der Service geladen, welcher die Items zur verfügung stellt.
     */
    constructor(itemService: ItemService);
    /**
     * Bei der Initialisierung werden die Items in die Arrays geladen.
     * Ebenfalls wird ermittelt, wie viele Items in einer Reihe angezeigt werden sollen.
     * Dies ist wichtig, weil sich die Items je nach Anzahl in einer Reihe unterschiedlich verhalten.
     */
    private ngOnInit();
    private ngAfterViewInit();
    /**
     * Nachdem der Kontent initialisiert wurde, werden dort, wo nur die TopItems dargestellt werden Buttens sichtbar gemacht,
     * um die anderen Items sichtbar machen zu können.
     */
    private ngAfterContentChecked();
    private showDetailAngebote(i, index);
    private showDetailTeam(i, index);
    private nextRightElement(index);
    private fixHoehe();
    private goToTop();
    /**
     * Beim aktivieren eines Items werden zuerst alle anderen deaktiviert, damit der Fokus immer nur auf einem Item bleibt.
     */
    /**
     * Hier werden die Items per Reihe gesetzt.
     */
    private setItemsPerRow(size);
    /**
     * Hier werden die sich am rechten Rand befindenden Items markiert.
     */
    private updateRightElements(value);
    /**
     * Hier wird die Ansicht der Items geändert.
     * @element welches Element das geändert wird.
     * @index das wievielte Element es ist.
     */
    /**
     * Das Wechseln von wenigen Items zu allen Items
     */
    private moreItems();
    /**
     * Das Wechseln von allen Items zu wenigen Items.
     */
    private lessItems();
}
