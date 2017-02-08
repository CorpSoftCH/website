import {Component} from '@angular/core';
import {HelloService} from 'app/services/hello-service'
/**
 * Diese Komponente beinhaltet die Hello-Section
 */
@Component({
  selector: 'coso-hello',
  templateUrl: 'app/templates/hello.html',
  providers: [HelloService]
})
export class HelloComponent {
    hello: Hello;
    value: string = "home";
	constructor( private service: HelloService) {
        this.hello = service.getHello(this.value);
    }
}