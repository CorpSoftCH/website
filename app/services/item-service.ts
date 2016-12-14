import angebot from 'app/data/angebot';
import partner from 'app/data/partner';
import team from 'app/data/team';
import unternehmen from 'app/data/unternehmen';
import produkte from 'app/data/produkte';

export class Item {
  constructor(
    public id: string,
    public name: Array<string>,
    public description: Array<string>,
    public descriptionInList: Array<string> = [],
    public imgPath: string,
    public links: Array<string> = [],
    public price: string = "",
    public priceFor: string = "",
    public active: boolean = false,
    public operator: string = "plus",
    public maxInRow: number = 3){}

  setActive(activate: boolean): void {
      this.active = activate;
  }

  changeOperator(): void {
    if (this.operator == "minus") {
      this.operator = "plus"
    } else {
      this.operator = "minus";
    }
    
  }

}

export class ItemService {
  TOP_PARTNER_ANZAHL: number = 3;

  public getItems(values: string): Array<Item> {
    if(values == "test") {
      return this.getTestItems();
    } else if (values == "angebote") {
      return this.getAngebote();
    } else if (values == "team") {
      return this.getTeam();
    } else if (values == "partner") {
      return this.getPartner();
    } else if (values == "unternehmen") {
      return this.getUnternehmen();
    } else if (values == "produkte") {
      return this.getProdukte();
    }
  }

  private getTestItems(): Array<Item> {
    var items: Array<Item> = [];
    items[0] = new Item("test1", ["Titel", "2. Titel"], ["Des1", "Des2"], ["li1", "li2"], "");
    items[1] = new Item("test2", ["Titel", "2. Titel"], ["Des1", "Des2"], ["li1", "li2"], "");
    return items;
  }
  
  private getAngebote(): Array<Item> {
    return angebot.map(a => new Item(a.id, a.title, a.description, a.list, a.imgPath));
  }

  private getTeam(): Array<Item> {
    return team.map(t => new Item(t.kuerzel, t.name, t.description, [] , t.imgPath, t.links));
  }

  private getPartner(): Array<Item> {
    return partner.map(p => new Item(p.id, p.title, p.description, [], p.imgPath, p.link));
  }
  
  private getUnternehmen(): Array<Item> {
    return unternehmen.map(u => new Item(u.id, u.title, u.paragraphs, u.list, u.imgPath));
  }
  private getProdukte(): Array<Item> {
    return produkte.map(pr => new Item(pr.id, pr.title, pr.description, [], "", [], pr.price, pr.priceFor));
  }
  /*
  getPartner(): Array<Item> {
    return partner.map(p => new Item(p.id, p.title, p.description, p.imgPath, p.link));
  }

  getTopPartner(): Array<Item> {
    var p = this.getPartner();
    var tp: Item[] = [];
    for (var i:number = 0; i < this.TOP_PARTNER_ANZAHL; i++) {
      tp.push(p[i]);
    }
    return tp; 
  }*/
}