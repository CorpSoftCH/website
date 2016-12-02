import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {AngebotPartnerService} from 'app/services/angebot-partner-service';
import {ReferenzenService} from 'app/services/referenzen-service';
import {TeamService} from 'app/services/team-service';
import {UnternehmenService} from 'app/services/unternehmen-service';
import {ProduktService} from 'app/services/produkte-service';

import HeaderComponent from './header';

@Component({
	selector: 'coso',
	templateUrl: 'app/templates/coso.html',
	directives: [ ROUTER_DIRECTIVES, HeaderComponent ],
	providers: [AngebotPartnerService, TeamService, UnternehmenService, ReferenzenService, ProduktService, HeaderComponent],
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


	angebote: Item[] = [];
	referenzen: Referenz[] = [];
	unternehmen: Unternehmen;
	team: Mitarbeiter[] = [];
	partner: Item[] = [];
	toppartner: Item[] = [];
	showpartner: Item[] = [];
	produkte: ProdWebInhalt[] = [];


	constructor(
		private angPartService: AngebotPartnerService,
		private refService: ReferenzenService,
		private teamService: TeamService,
		private untService: UnternehmenService,
		private prodService: ProduktService
		) {
		this.angebote = angPartService.getAngebote();
		this.referenzen = refService.getReferenzen();
		this.unternehmen = untService.getUnternehmen();
		this.team = teamService.getTeam();
		this.toppartner = angPartService.getTopPartner();
		this.showpartner = this.toppartner;
		this.partner = angPartService.getPartner();
		this.produkte = prodService.getPWI();
		
		window.onresize = () => {
			this.myResize(); 
    	};	
	}

	

    ngOnInit(): void {
    	this.loadMap();
		this.activateFirst();
		this.myResize();
	}

	myResize() {
		this.setHeaderClasses(window.innerWidth);
		this.setSizeSettings(window.innerWidth);
	}

	deactivateOthers(ignoreElement: any) { //Das aktuelle Element darf noch nicht deaktiviert werden, damit der User es deaktivieren kann.
		for(let value of this.angebote) {
			if(value.active && value != ignoreElement) {
				this.changeView(value);
			}
		}
		for(let value of this.showpartner) {
			if(value.active && value != ignoreElement) {
				this.changeView(value);
			}
		}
		for(let value of this.team) {
			if(value.active && value != ignoreElement) {
				this.changeView(value);
			}
		}
	}


    changeView(element:any): void  {
    	element.active = !element.active;
    	element.changeOperator();
    	$("#text-" + element.id ).toggleClass("hide");
		$("#arrow-" + element.id ).toggleClass("hide");
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
		if(this.TABLET <= size && size <= this.SMALL_DESKTOP) {
			$("body").addClass("smallDesk");
		} else {
			$("body").removeClass("smallDesk");
		}
		
		if(this.TABLET < size) {
			$("body").removeClass("tablet");
			$("body").removeClass("mobile-large");
			
			$(".title").removeClass("hide");
			$("body").addClass("desktop");
			
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
		}
	}


	setHeaderClasses(size: number): void {
		if(size < this.SMALL_DESKTOP) {
			$("#burger").removeClass("hide");
			$("#navigation").addClass("smallHead hide");
		} else {
			$("#burger").addClass("hide");
			$("#navigation").removeClass("smallHead hide");
		}
	}

	morePartner(): void  {
		this.showpartner = this.partner;
		this.setSizeSettings(window.innerWidth);
		$("#mPart").toggleClass("hide");
		$("#lPart").toggleClass("hide");
	}

	lessPartner(): void  {
		this.showpartner = this.toppartner;
		this.setSizeSettings(window.innerWidth);
		$("#mPart").toggleClass("hide");
		$("#lPart").toggleClass("hide");
	}
}