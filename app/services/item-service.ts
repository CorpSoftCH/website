import angebot from 'app/data/angebot';
import partner from 'app/data/partner';
import team from 'app/data/team';
import unternehmen from 'app/data/unternehmen';
import produkte from 'app/data/produkte';
import referenzen from 'app/data/referenzen';

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
export class Item {
  constructor(
    public id: string,
    public titles: Array<string>,
    public imgPath: string,
    public contentStrings: Array<string>,
    public specialStrings: Array<string>,
    //active - hasFixText - isLink - isProduct - isRightElement
    public flags: Array<boolean>,
    public state: string = ""){}

  /**
   * Diese Funktion gibt zurück, ob das Item aktiv ist.
   */
  private isActive(): boolean {
    return this.flags[0];
  }
  /**
   * Diese Funktion setzt ein Item aktiv oder deaktiviert es.
   */
  private setActive(value: boolean): void {
      this.flags[0] = value;
  }

  /**
   * Diese Funktion gibt zurück, ob es sich beim Element um eines handelt, welches sich am rechten Rand befindet.
   */
  private isRightElement(): boolean {
    return this.flags[4];
  }
  /**
   * Diese Funktion markiert ein Element dazu, dass es sich am rechten Rand befindet.
   */
  private setAsRightElement(value: boolean) {
    this.flags[4] = value;
  }
  /**
   * Diese Funktion gibt einen String zurück welche die Lupe zu einem Minus oder Plus macht.
   */
  private getOperator(): string {
    if(this.flags[0]) {
      return "minus";
    } else {
      return "plus";
    }
  }
}

/**
 * Diese Klasse stellt die Funktionen bereit, welche die richtigen Inhalte der Items lädt und diese in einem Array von Items den Komponenten Übergit.
 */
export class ItemService {

  public getItems(values: string): Array<Item> {
    if (values == "angebote") {
      return this.getAngebote();
    } else if (values == "team") {
      return this.getTeam();
    } else if (values == "partner") {
      return this.getPartner();
    } else if (values == "unternehmen") {
      return this.getUnternehmen();
    } else if (values == "produkte") {
      return this.getProdukte();
    } else if (values == "referenzen") {
      return this.getReferenzen();
    }
  }
  
  private getAngebote(): Array<Item> {
    return angebot.map(a => new Item(a.id, [a.title], a.imgPath , a.description, a.list, [false, false, false, false, false]));
  }

  private getTeam(): Array<Item> {
    return team.map(t => new Item(t.kuerzel, [t.vorname, t.nachname], t.imgPath, t.description, t.links, [false, false, false, false, false]));
  }

  private getPartner(): Array<Item> {
    return partner.map(p => new Item(p.id, p.title, p.imgPath, p.description, p.link, [false, false, true, false, false]));
  }
  
  private getUnternehmen(): Array<Item> {
    return unternehmen.map(u => new Item(u.id, u.title, u.imgPath, u.paragraphs, u.list, [false, true, false, false, false], ));
  }
  private getProdukte(): Array<Item> {
    return produkte.map(pr => new Item(pr.id, pr.title, "" , pr.description, [], [false, true, false, true, false]));
  }
  private getReferenzen(): Array<Item> {
    return referenzen.map(r => new Item(r.id, [r.lecturer, r.position], r.imgPath , r.zitat, [r.link], [r.state]));
  }
}