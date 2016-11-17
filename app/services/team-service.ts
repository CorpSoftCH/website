import team from 'app/data/team';

export class Mitarbeiter {
  constructor(
    public vorname: string,
    public nachname: string,
    public id: string,
    public description: Array<string>,
    public email: string,
    public imgPath: string,
    public vCardPath: string,
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

export class TeamService {

  getTeam(): Array<Mitarbeiter> {
    return team.map(m => new Mitarbeiter(m.vorname, m.nachname, m.kuerzel, m.description,m.email, m.imgPath, m.vCardPath));
  }

}