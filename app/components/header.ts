import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'coso-header',
  templateUrl: 'app/templates/header.html',
  directives: [ ROUTER_DIRECTIVES],
})
export default class HeaderComponent implements OnInit {
	//private WIDTH_BY_NAVCHANGE: number = 1200;

	constructor() {
		this.startHeaderListener();
	}

	ngOnInit(): void {
    	//this.setClasses(window.innerWidth);
    }


	startHeaderListener(): void {
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

	toggleNav(): void {
		$("#navigation").toggleClass("hide");
	}

	/*
	setClasses(size: number): void {
		if(size < this.WIDTH_BY_NAVCHANGE) {
			$("#burger").removeClass("hide");
			$("#navigation").addClass("small hide");
		} else {
			$("#burger").addClass("hide");
			$("#navigation").removeClass("small hide");
		}
	}*/
}