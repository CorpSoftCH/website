import allProducts from 'app/data/allProdukte';


export class ProduktClass {
    constructor(
        public id: string,
        public title: string,
        public products: Array<Produkt>,
    ){}
}

export class Produkt {
    constructor(
        public size: string,
        public content: Array<Content>,
        public button: string,
    ){}
}

export class Content {
    constructor(
        public title: string,
        public list: Array<String>,
        public imgPath: string,
    ){}
}

/**
 * Die Funktion in dieser Klasse übergibt die Produkte der Komponente.
 */
export class ProduktService {
  
  public getProdukte(): Array<ProduktClass> {
    var all = allProducts.map(pc => new ProduktClass(pc.id, pc.title, pc.products.map(p => new Produkt(p.size, p.content.map(c => new Content(c.title, c.list, c.imgPath)) ,p.button))))
    return all;  
  }
}