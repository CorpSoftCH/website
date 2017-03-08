import { Router } from '@angular/router';
import { HelloService, Hello } from '../services/hello-service.ts';
/**
 * Diese Komponente beinhaltet die Hello-Section
 */
export declare class HelloComponent {
    private service;
    private route;
    hello: Hello;
    hellos: Array<Hello>;
    value: string;
    mode: Array<String>;
    constructor(service: HelloService, route: Router);
    private ngAfterContentChecked();
}
