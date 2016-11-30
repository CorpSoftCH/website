import produkte from 'app/data/produkte';

export class Produkt {
  constructor(
    public id: string,
    public title: string,
    public price: string,
    public priceFor: string,
    public description: Array<string>){}
}

export class ProdWebInhalt {
    constructor(
        public text: Array<string>,
        public produkte: Array<Produkt>,
    ){}
}

export class ProduktService {
    
    getPWI(): ProdWebInhalt {
        return produkte.map(pwi => new ProdWebInhalt(pwi.text, pwi.produkte.map(p => new Produkt(p.id, p.title, p.price, p.priceFor, p.description))));
    }

}