import angebot from '../data/angebot';
import partner from '../data/partner';

export class Item {
  constructor(
    public id: string,
    public title: string,
    public description: Array<string>,
    public imgPath: string,
    public link: string = "",
    public list: Array<string> = [],
    public active: boolean = false,
    public operator: string = "plus"){}

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

export class AngebotPartnerService {
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

