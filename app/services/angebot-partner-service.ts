import angebot from 'app/data/angebot';
import partner from 'app/data/partner';

export class Item {
  constructor(
    public id: string,
    public title: string,
    public description: Array<string>,
    public imgPath: string,
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

  getAngebote(): Array<Item> {
    return angebot.map(a => new Item(a.id, a.title, a.description, a.imgPath));
  }

  getPartner(): Array<Item> {
    return partner.map(p => new Item(p.id, p.title, p.description, p.imgPath));
  }

  getTopPartner(): Array<Item> {
    var p = this.getPartner();
    var tp: Item[] = [];
    for (var i:number = 0; i < 4; i++) {
      tp.push(p[i]);
    }
    return tp; 
  }
}

