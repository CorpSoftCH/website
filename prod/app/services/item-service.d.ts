/**
 * Die Item Klasse definiert ein Item.
 * @id eindeutige Itdentifikation des Items
 * @titles Ein Array aus titeln und subtiteln
 * @imgPath Ein String in dem der Pfad zu einem Bild drin ist.
 * @contentStrings In diesem Array sind die Strings mit dem Hauptinhalt
 * @specialStrings In diesem Array sind Item-spezifisch andere Strings mit spezifischem Inhalt
 * @flags Hier sind mehrere Flags gesetzt, um die Art des Items zu ermitteln
 *  [0] Ist dieses Flag gesetzt, ist es "aktiv", heisst zu beginn unsichtbare Inhalte zum Item werden angezeigt.
 *  [1] Ist dieses Flag gesetzt, handelt es sich um ein Item, welches von anfang an schon alle Infos offenbart.
 *  [2] Ist dieses Flag gesetzt, handelt es sich beim Item schlicht um ein verlinktes Bild.
 *  [3] Ist dieses Flag gesetzt, handelt es sich um Produkte. (In diesem Staduim noch nicht relevant)
 *  [4] Ist dieses Flag gesetzt, befindet sich das Element auf der rechten Seite des Fensters und verhält sich nicht wie die anderen
 * @state dieser wird benötigt, um das Bootstrap-Carousel zu nutzen. Bei den anderen ist dieser Leer
 */
export declare class Item {
    id: string;
    titles: Array<string>;
    imgPath: string;
    contentStrings: Array<string>;
    specialStrings: Array<string>;
    specialStrings2: Array<string>;
    specialStrings3: Array<string>;
    flags: Array<boolean>;
    state: string;
    constructor(id: string, titles: Array<string>, imgPath: string, contentStrings: Array<string>, specialStrings: Array<string>, specialStrings2: Array<string>, specialStrings3: Array<string>, flags: Array<boolean>, state?: string);
    /**
     * Diese Funktion gibt zurück, ob das Item aktiv ist.
     */
    isActive(): boolean;
    /**
     * Diese Funktion setzt ein Item aktiv oder deaktiviert es.
     */
    setActive(value: boolean): void;
    /**
     * Diese Funktion gibt zurück, ob es sich beim Element um eines handelt, welches sich am rechten Rand befindet.
     */
    isRightElement(): boolean;
    /**
     * Diese Funktion markiert ein Element dazu, dass es sich am rechten Rand befindet.
     */
    setAsRightElement(value: boolean): void;
    /**
     * Diese Funktion gibt einen String zurück welche die Lupe zu einem Minus oder Plus macht.
     */
    getOperator(): string;
}
/**
 * Diese Klasse stellt die Funktionen bereit, welche die richtigen Inhalte der Items lädt und diese in einem Array von Items den Komponenten Übergit.
 */
export declare class ItemService {
    getItems(values: string): Array<Item>;
    private getAngebote();
    private getTeam();
    private getPartner();
    private getUnternehmen();
    private getProdukte();
    private getReferenzen();
}
