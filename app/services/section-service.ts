//import section from '../data/section';
var section = [
    {
        "id": "angebot",
        "title": "Angebot",
        "subtitles": [
            "Verbesserte Zusammenarbeit. Sichere Daten in der Cloud. Produktive Projekt Organisation. Beseitigung von Ineffizienzen.",
            "Bei unseren Dienstleistungen finden Sie was Sie wünschen. Sei es als Cloud- oder OnPremis-Lösung, wir verfügen über das nötige Know How. Als Microsoft Partner und  Trainer kennen wir uns mit den neusten Produkte und Trends aus. "
        ],
        "itemFlag": true,
        "showOnlyTopItems": false,
        "content": "angebote",
        "itemsPerRow": 4,        
    }, {
        "id": "produkte",
        "title": "Unsere CorpSoft Produkte",
        "subtitles": [
            "Bringen Sie Ihre IT-Dienstleistungen in die Cloud",
            "Mit unseren CorpSoftProdukten (CSP) gelingt Ihnen einen reibungslosen Einstieg in die Cloud. Bei unseren CorpSoftProdukten haben Sie die Wahl zwischen einem Basic, Standard oder Full Package. In jedem Package profitieren Sie neben der gewünschten Lizenz eine Einführung oder Erstkonfiguration in Form eines Coachings."
        ],
        "itemFlag": true,
        "showOnlyTopItems": false,
        "content": "produkte",
        "itemsPerRow": 3,    
    }, {
        "id": "unternehmen",
        "title": "Unternehmen",
        "subtitles": [
            "Wir bringen Sie voran - Professionelle Lösungen an den Schnittstellen von Business und IT"
             ],
        "itemFlag": true,
        "showOnlyTopItems": false,
        "content": "unternehmen",
        "itemsPerRow": 3,          
    }, {
        "id": "referenzen",
        "title": "Referenzen",
        "subtitles": [],
        "itemFlag": false,
        "showOnlyTopItems": false,
        "content": "referenzen",
        "itemsPerRow": 0,       
    },{
        "id": "team",
        "title": "Team",
        "subtitles": [],
        "itemFlag": true,
        "showOnlyTopItems": false,
        "content": "team",
        "itemsPerRow": 6,          
    }, {
        "id": "partner",
        "title": "Partner",
        "subtitles": [],
        "itemFlag": true,
        "showOnlyTopItems": true,
        "content": "partner",
        "itemsPerRow": 4,         
    }
];
/**
 * Diese Klasse definiert eine Sektion.
 * @id eindeutige identifikation der Sektion
 * @title der Titel der Sektion h1 Tag im HTML
 * @subtitles Dies sind Untertitel der Sektion h2 Tag im HTML (uppercase)
 * @itemFlag ob in der Sektion Items vorkommen
 * @showOnlyTopItems ob alle oder nur auserwählte Items zu beginn gezeigt werden sollen
 */
export class Section {
  constructor(
    public id: string,
    public title: string,
    public subtitles: Array<string>,
    public content: string,
    public itemFlag: boolean = false,
    public showOnlyTopItems: boolean = false,
    public itemsPerRow: number = 0,
    ){}

}

/**
 * Die Funktion in dieser Klasse übergibt die Sektionen der Komponente.
 */
export class SectionService {
  
  public getSections(): Array<Section> {
    return section.map(s => new Section(s.id, s.title, s.subtitles, s.content, s.itemFlag, s.showOnlyTopItems, s.itemsPerRow));
  }
  
  public getServices(): Array<Section> {
    var sections: Array<Section> = this.getSections();
    var ids: Array<string> = ["angebot","produkte"];
    var services: Array<Section> = [];
    
    console.log(sections);
    for(let s of sections) {
      for(let id of ids) {
        if(s.id == id) {
          services.push(s);
        }
      }
    }
    
    return services;
  } 
}