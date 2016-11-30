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
	WIDTH_BY_NAVCHANGE: number = 1200;
	MAX_WIDTH: number = 1500;
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
		
		//window.dispatchEvent(new Event('resize'));
		//window.resizeTo(window.innerWidth+1, window.innerHeight+1);
		window.onresize = () => {
			this.myResize(); 
    	};

		//window.onresize = this.myResize;

		/*$(document).ready() {
			console.log("log");
			$(window).resize();
		}*/
		
	}

	

    ngOnInit(): void {
    	this.loadMap();
		this.activateFirst();
		//$(window).onresize();
		//window.onresize = this.myResize;
		this.myResize();
	}

	myResize() {
		console.log("my new Size: " , window.innerWidth);
		this.setHeaderClasses(window.innerWidth);
		this.setSizeSettings(window.innerWidth);
	}


    changeView(element:any): void  {
    	element.active = !element.active;
    	element.changeOperator();
    	$("#" + element.id ).toggleClass("hide");

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
		console.log("done");
		if(this.TABLET < size) {
			$("#angebot .item").width("33.33%");
			$("#angebot").removeClass("mobile");
			$("#produkte .item").width("calc(33.33% - 4.4em)");
			$("#unternehmen .item").width("calc(33.33% - 3em)");
			$("#team .item").width("calc(25% - 3em)");
			$("#partner .item").width("calc(25% - 3em)");
			$("#kontakt .row").width("50%");
		} else if(this.MOBILE < size && size <= this.TABLET) {
			$("#angebot .item").width("50%");
			$("#angebot").removeClass("mobile");
			$("#produkte .item").width("calc(100% - 4.4em)");
			$("#unternehmen .item").width("calc(100% - 3em)");
			$("#team .item").width("calc(50% - 3em)");
			$("#partner .item").width("calc(50% - 3em)");
			$("#kontakt .row").width("100%");
		} else if (this.MOBILE > size) {
			$(".title").addClass("hide");
			$("#angebot .item").width("100%");
			$("#angebot").addClass("mobile");

			$("#produkte .item").width("calc(100% - 4.4em)");
			$("#unternehmen .item").width("calc(100% - 3em)");
			$("#team .item").width("calc(100% - 3em)");
			$("#partner .item").width("calc(100% - 3em)");
			$("#kontakt .row").width("100%");
			
		}
	}


	setHeaderClasses(size: number): void {
		if(size < this.WIDTH_BY_NAVCHANGE) {
			$("#burger").removeClass("hide");
			$("#navigation").addClass("small hide");
		} else {
			$("#burger").addClass("hide");
			$("#navigation").removeClass("small hide");
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