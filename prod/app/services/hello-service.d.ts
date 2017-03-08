/**
 * Diese Klasse definiert eine Sektion.
 * @id eindeutige identifikation der Sektion
 * @title der Titel der Sektion h1 Tag im HTML
 * @subtitles Dies sind Untertitel der Sektion h2 Tag im HTML (uppercase)
 * @itemFlag ob in der Sektion Items vorkommen
 * @showOnlyTopItems ob alle oder nur auserwählte Items zu beginn gezeigt werden sollen
 */
export declare class Hello {
    where: string;
    title: string;
    subtitles: Array<string>;
    constructor(where: string, title: string, subtitles: Array<string>);
}
/**
 * Die Funktion in dieser Klasse übergibt die Sektionen der Komponente.
 */
export declare class HelloService {
    getHello(where: string): Hello;
    getHellos(): Array<Hello>;
}
