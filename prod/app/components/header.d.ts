import { Router } from '@angular/router';
/**
 * Diese Komponente wird für den Header eingesetzt.
 */
export declare class HeaderComponent {
    private route;
    sections: any;
    win: Window;
    private offSet;
    state: string;
    mode: Array<String>;
    /**
     * Der Konstruktor speichert die Fensterdaten in einer Variablen.
     */
    constructor(route: Router);
    /**
     * Nachdem der Content geladen wurde werden alle Sektionen, ausser der ersten ins section-Array geladen.
     */
    private ngAfterContentChecked();
    /**
     * In dieser Funktion wird die Navigation ein- / ausgeblendet.
     */
    private toggleNav();
    /**
     * Diese Funktion initiiert eine Bewegung durch die Seite.
     * @yPoint gibt den Ort auf der Page an.
     * @duration gibt die Dauer an, bis die Seite an der Stelle sein soll.
     */
    private scrollTo(yPoint, duration);
    /**
     * Diese Funktion wird aufgerufen, um mit einer Bewegung zu einer Sektion zu gelangen.
     * @eID die ID der Sektion, zu der gescrollt werden soll.
     */
    private smoothScroll(eID);
    /**
     * Hier wird ermittelt. Wo man sich auf der Webseite befindent.
     */
    private currentYPosition();
    /**
     * Hier wird ermittelt, wo sich die Zielsektion befindet.
     */
    private elmYPosition(eID);
}
