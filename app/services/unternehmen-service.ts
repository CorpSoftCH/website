import unternehmen from 'app/data/unternehmen';

export class Unternehmen {
    constructor(
        public title: string,
        public paragraphs: Array<string>,
        public list: Array<string>,
        public imgPath: string
    ){}

}

export class UnternehmenService {
    
    getUnternehmen(): Unternehmen {
        return unternehmen.map(p => new Unternehmen(p.title, p.paragraphs, p.list, p.imgPath));
    }

}