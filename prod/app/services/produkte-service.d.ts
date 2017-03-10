export declare class ProduktClass {
    id: string;
    title: string;
    subtitles: Array<string>;
    products: Array<Produkt>;
    constructor(id: string, title: string, subtitles: Array<string>, products: Array<Produkt>);
}
export declare class Produkt {
    size: string;
    mindLizenzen: number;
    content: Array<Content>;
    button: string;
    constructor(size: string, mindLizenzen: number, content: Array<Content>, button: string);
}
export declare class Content {
    title: string;
    list: Array<String>;
    imgPath: string;
    lizenzen: Array<number>;
    constructor(title: string, list: Array<String>, imgPath: string, lizenzen?: Array<number>);
}
/**
 * Die Funktion in dieser Klasse übergibt die Produkte der Komponente.
 */
export declare class ProduktService {
    getProdukte(): Array<ProduktClass>;
}
