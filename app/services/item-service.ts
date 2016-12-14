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


  getAngebote(): Array<Item> {
    return angebot.map(a => new Item(a.id, a.title, a.description, a.imgPath, "", a.list));
  }

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
  }
}