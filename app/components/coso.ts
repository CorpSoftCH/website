import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {SectionService} from 'app/services/section-service';
import {ReferenzenService} from 'app/services/referenzen-service';

import HeaderComponent from './header';
import ItemComponent from './item';
import ProduktComponent from './produkte';
import UnternehmenComponent from './unternehmen';

@Component({
	selector: 'coso',
	templateUrl: 'app/templates/coso.html',
	directives: [ ROUTER_DIRECTIVES, HeaderComponent, ItemComponent],
	providers: [SectionService, ReferenzenService],
	precompile: []
	})
export default class CosoComponent implements OnInit {
	MAX_WIDTH: number = 1500;
	SMALL_DESKTOP: number = 1200;
	DESKTOP: number = 960;
	TABLET: number =  768;
	MOBILE_LARGE: number = 640;
	MOBILE: number = 480;	
	MOBILE_SMALL: number =  300;

	sections: Section[] = [];
	referenzen: Referenz[] = [];

	constructor( private sectionService: SectionService, private refService: ReferenzenService ) {
			
		this.sections = sectionService.getSections();
		this.referenzen = refService.getReferenzen();

		window.onresize = () => {
			this.setSizeSettings(window.innerWidth);
    	};	
	}

    ngOnInit(): void {
    	this.loadMap();
		this.activateFirst();
		this.setSizeSettings(window.innerWidth);
	}

	activateFirst(): void  {
		referenzen[0].state = "active";
	}

    loadMap(): void  {    	
	    var myLatLng = {lat: 47.1316061, lng: 7.2481453};

	    var mapProp = {
	        center: new google.maps.LatLng(47.1316061,7.2481453),
	        zoom: 17,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        scrollwheel: false,
	    };
	    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	    var image = 'app/data/images/logos/coso_google_marker_klein.png';
	    var marker = new google.maps.Marker({
	      map: map,
	      position: myLatLng,
	      title: 'CoSo',
	      icon: image
	    });
	};

	setSizeSettings(size: number): void  {
		//Burgernavigation Ja/Nein
		/*
		if(size < this.SMALL_DESKTOP) {
			$("#burger").removeClass("hide");
			$("#navigation").addClass("smallHead hide");
		} else {
			$("#burger").addClass("hide");
			$("#navigation").removeClass("smallHead hide");
		}
		*/

		if (size <= this.MOBILE) {
			$(".col-sm-4").removeClass("col-xs-6");
			$(".col-sm-3").removeClass("col-xs-4");
		} else {
			$(".col-sm-4").addClass("col-xs-6");
			$(".col-sm-3").addClass("col-xs-4");
		}
		
		/*
		//Desktop Gross/Klein
		if(this.TABLET <= size && size <= this.SMALL_DESKTOP) {
			$("body").addClass("smallDesk");
		} else {
			$("body").removeClass("smallDesk");
		}
		
		//Desktop Ja/Nein
		if(this.TABLET < size) {
			$("body").removeClass("tablet");
			$("body").removeClass("mobile-large");
			
			$(".title").removeClass("hide");
			$("body").addClass("desktop");
		//	
		} else if(this.MOBILE_LARGE < size && size <= this.TABLET) {
			$("body").removeClass("desktop");
			$("body").removeClass("mobile-large");
			
			$(".title").addClass("hide");
			$("body").addClass("tablet");

		} else if (size <= this.MOBILE_LARGE) {
			$("body").removeClass("desktop");
			$("body").removeClass("tablet");
			
			$(".title").addClass("hide");
			$("body").addClass("mobile-large");
		}*/
	}
}