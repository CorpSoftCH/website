import section from 'app/data/section';
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
}