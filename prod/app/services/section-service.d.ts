/**
 * Diese Klasse definiert eine Sektion.
 * @id eindeutige identifikation der Sektion
 * @title der Titel der Sektion h1 Tag im HTML
 * @subtitles Dies sind Untertitel der Sektion h2 Tag im HTML (uppercase)
 * @itemFlag ob in der Sektion Items vorkommen
 * @showOnlyTopItems ob alle oder nur auserwählte Items zu beginn gezeigt werden sollen
 */
export declare class Section {
    id: string;
    title: string;
    subtitles: Array<string>;
    content: string;
    itemFlag: boolean;
    showOnlyTopItems: boolean;
    itemsPerRow: number;
    constructor(id: string, title: string, subtitles: Array<string>, content: string, itemFlag?: boolean, showOnlyTopItems?: boolean, itemsPerRow?: number);
}
/**
 * Die Funktion in dieser Klasse übergibt die Sektionen der Komponente.
 */
export declare class SectionService {
    getSections(): Array<Section>;
    getServices(): Array<Section>;
}
