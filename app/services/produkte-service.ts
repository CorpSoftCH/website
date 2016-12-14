import produkte from 'app/data/produkte';

export class Produkt {
  constructor(
    public id: string,
    public title: string,
    public price: string,
    public priceFor: string,
    public description: Array<string>){}
}

export class ProduktService {
    
    getProdukte(): Array<Produkt> {
        return produkte.map(p => new Produkt(p.id, p.title, p.price, p.priceFor, p.description));
    }

}