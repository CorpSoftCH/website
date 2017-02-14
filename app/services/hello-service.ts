import hello from 'app/data/hello';
/**
 * Diese Klasse definiert eine Sektion.
 * @id eindeutige identifikation der Sektion
 * @title der Titel der Sektion h1 Tag im HTML
 * @subtitles Dies sind Untertitel der Sektion h2 Tag im HTML (uppercase)
 * @itemFlag ob in der Sektion Items vorkommen
 * @showOnlyTopItems ob alle oder nur auserwählte Items zu beginn gezeigt werden sollen
 */
export class Hello {
  constructor(
    public where: string,
    public title: string,
    public subtitles: Array<string>,
    ){}

}

/**
 * Die Funktion in dieser Klasse übergibt die Sektionen der Komponente.
 */
export class HelloService {
  
  public getHello(where: string):Hello {
    var pages: Array<Hello> = hello.map(h => new Hello(h.where, h.title, h.subtitles));
    for (let value of pages) {
        if(value.where == where) {
            return value;
        }
    }
  }

  public getHellos():Array<Hello> {
    var pages: Array<Hello> = hello.map(h => new Hello(h.where, h.title, h.subtitles));
    return pages;
  }
}