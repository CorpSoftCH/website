import referenzen from 'app/data/referenzen';

export class Referenz {
  constructor(
    public id: string,
    public zitat: Array<string>,
    public lecturer: string,
    public position: string,
    public link: string,
    public imgPath: string,
    public state: string = ""){}

}

export class ReferenzenService {

  getReferenzen(): Array<Referenz> {
    return referenzen.map(r => new Referenz(r.id, r.zitat, r.lecturer, r.position, r.link, r.imgPath, r.state));
  }

}