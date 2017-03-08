import {Http} from '@angular/http';

//import unternehmen from '../data/unternehmen.json';

export class Unternehmen {
    constructor(
        public title: string,
        public paragraphs: Array<string>,
        public list: Array<string>,
        public imgPath: string
    ){}

}

export class UnternehmenService {
    constructor(private http:Http) {}
    
    getUnternehmen(): Unternehmen {
        debugger;
        let unternehmen:any = this.http.request('./data/unternehmen');
        debugger;
        return unternehmen.map(p => new Unternehmen(p.title, p.paragraphs, p.list, p.imgPath));
    }

}

