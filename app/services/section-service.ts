import section from 'app/data/section';

export class Section {
  constructor(
    public id: string,
    public title: string,
    public subtitles: Array<string>,
    public itemFlag: boolean = true,
    public content: string
    ){}

}

export class SectionService {
  

  public getSections(): Array<Section> {
    return section.map(s => new Section(s.id, s.title, s.subtitles, s.itemFlag, s.content));
  }
}