import section from 'app/data/section';

export class Section {
  constructor(
    public id: string,
    public title: string,
    public subtitles: Array<string>,
    public content: string,
    public itemFlag: boolean = false,
    public showOnlyFew: boolean = false,
    public isProduct: boolean = false
    ){}

}

export class SectionService {
  

  public getSections(): Array<Section> {
    return section.map(s => new Section(s.id, s.title, s.subtitles, s.content, s.itemFlag, s.isProduct, s.showOnlyFew));
  }
}