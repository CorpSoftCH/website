import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'coso-header',
  templateUrl: 'app/templates/header.html',
  directives: [ ROUTER_DIRECTIVES ];
})
export default class HeaderComponent {
	constructor {

		window.addEventListener('scroll', function(e){
	        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	            shrinkOn = 80,
	            header = document.querySelector("header");
	        if (distanceY > shrinkOn) {
	            header.className = "smallerHead";
	        } else {
	            if (header.className == "smallerHead") {
	            	header.className = "";
	            }
	        }
	    });

	}
}