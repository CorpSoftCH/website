import angebot from 'app/data/angebot';
import partner from 'app/data/partner';
import team from 'app/data/team';

export class Item {
  constructor(
    public id: string,
    public name: Array<string>,
    public description: Array<string>,
    public descriptionInList: Array<string> = [],
    public imgPath: string,
    public links: Array<string> = [],
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

  private getTestItems(): Array<Item> {
    var items: Array<Item> = [];
    items[0] = new Item("test1", ["Titel", "2. Titel"], ["Des1", "Des2"], ["li1", "li2"], "");
    items[1] = new Item("test2", ["Titel", "2. Titel"], ["Des1", "Des2"], ["li1", "li2"], "");
    return items;
  }

  public getItems(values: string): Array<Item> {
    if(values == "test") {
      return this.getTestItems();
    } else if (values == "angebote") {
      return this.getAngebote();
    }
  }
  
  private getAngebote(): Array<Item> {
    return angebot.map(a => new Item(a.id, a.title, a.description, a.list, a.imgPath));
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