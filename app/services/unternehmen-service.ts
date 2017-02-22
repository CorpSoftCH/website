import unternehmen from 'app/data/unternehmen';

export class Unternehmen {
    constructor(
        public description: string,
        public property: Array<UnternehmenProperties>
    ){}

}

export class UnternehmenProperties {
    constructor(
        public title: string,
        public paragraphs: Array<string>,
        public list: Array<string>,
        public imgPath: string
    ){}
}

export class UnternehmenService {
    
    getUnternehmen(): Unternehmen {
        return unternehmen.map(u => new Unternehmen(u.description, u.property.map(p => new UnternehmenProperties(p.title, p.paragraphs, p.list, p.imgPath))));
    }

}