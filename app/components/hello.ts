import {Component} from '@angular/core';
import {Router} from '@angular/router';
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
    hellos: Array<Hello>;
    value: string = "products";
	mode: Array<String>;

	constructor( private service: HelloService, private route: Router) {
        this.hellos = this.service.getHellos();
    }

	private ngAfterContentChecked() {
        this.mode = this.route.url.split("/");
        if(this.mode[1] == "products") {
            this.hello = this.hellos[1];
        } else if(this.mode[1] == "services") {
            this.hello = this.hellos[2];
        } else {
            this.hello = this.hellos[0];
        }
	}
}