import angebot from 'app/data/angebot';
import partner from 'app/data/partner';
import team from 'app/data/team';
import unternehmen from 'app/data/unternehmen';
import produkte from 'app/data/produkte';
import referenzen from 'app/data/referenzen';

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


  isActive(): boolean {
    return this.flags[0];
  }

  isRightElement(): boolean {
    return this.flags[4];
  }
  setAsRightElement(value: boolean) {
    this.flags[4] = value;
  }

  setActive(value: boolean): void {
      this.flags[0] = value;
  }
  getOperator(): string {
    if(this.flags[0]) {
      return "minus";
    } else {
      return "plus";
    }
  }
}

export class ItemService {
  TOP_PARTNER_ANZAHL: number = 3;

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