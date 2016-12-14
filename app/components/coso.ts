import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {SectionService} from 'app/services/section-service';
import {AngebotPartnerService} from 'app/services/angebot-partner-service';
import {ReferenzenService} from 'app/services/referenzen-service';
import {TeamService} from 'app/services/team-service';
import {UnternehmenService} from 'app/services/unternehmen-service';
import {ProduktService} from 'app/services/produkte-service';

import HeaderComponent from './header';
import ItemComponent from './item';

@Component({
	selector: 'coso',
	templateUrl: 'app/templates/coso.html',
	directives: [ ROUTER_DIRECTIVES, HeaderComponent, ItemComponent ],
	providers: [AngebotPartnerService, TeamService, UnternehmenService, ReferenzenService, ProduktService, HeaderComponent, SectionService],
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

	itemRows: number = 3;

	angebote: Item[] = [];
	referenzen: Referenz[] = [];
	unternehmen: Unternehmen;
	team: Mitarbeiter[] = [];
	partner: Item[] = [];
	toppartner: Item[] = [];
	showpartner: Item[] = [];
	produkte: ProdWebInhalt[] = [];
	sections: Section[] = [];


	constructor(
		private sectionService: SectionService,
		private angPartService: AngebotPartnerService,
		private refService: ReferenzenService,
		private teamService: TeamService,
		private untService: UnternehmenService,
		private prodService: ProduktService
		) {
		this.sections = sectionService.getSections();
		this.angebote = angPartService.getAngebote();
		this.referenzen = refService.getReferenzen();
		this.unternehmen = untService.getUnternehmen();
		this.team = teamService.getTeam();
		this.toppartner = angPartService.getTopPartner();
		this.showpartner = this.toppartner;
		this.partner = angPartService.getPartner();
		this.produkte = prodService.getPWI();
		
		window.onresize = () => {
			this.setSizeSettings(window.innerWidth);
    	};	
	}

	

    ngOnInit(): void {
    	this.loadMap();
		this.activateFirst();
		this.setSizeSettings(window.innerWidth);
	}

	deactivateOthers(elements: Array<any> , ignoreElement: any) { //Das aktuelle Element darf noch nicht deaktiviert werden, damit der User es deaktivieren kann.
		for(let value of elements) {
			if(value.active && value != ignoreElement) {
				this.changeView(value);
			}
		}
	}


    changeView(element:any): void  {
    	element.active = !element.active;
    	element.changeOperator();
		
		$("#text-" + element.id ).toggleClass("hide");
		//$("#arrow-" + element.id ).toggleClass("hide");
		$("#item-" + element.id ).toggleClass("active");
		$("#field-" + element.id ).toggleClass("hide"); //notlösung

		/*
		$(".item-").removeClass("col-sm-8");
		$(".field").removeClass("col-xs-6");
		$(".text").removeClass("col-xs-6");

		$(".text").removeClass("rightElement");
		$(".text").removeClass("oneRow");
		$(".special").removeClass("special");
		*/
		//$("#item-" + element.id ).addClass("col-xs-6 col-sm-4");
		
		
		/*
		if(this.itemRows == 1) {
			$("#text-" + element.id ).addClass("oneRow");
		} else if (index%this.itemRows == 0 && element.active) {
			$("#text-" + element.id ).addClass("rightElement");
			if(index+this.itemRows-2 < this.angebote.length) {
				var spez = this.angebote[index+this.itemRows -2];
				$("#item-" + spez.id).addClass("special");
			}
		} else {
			$("#item-" + element.id ).addClass("col-sm-8");
			$("#item-" + element.id ).removeClass("col-xs-6 col-sm-4");
			$("#field-" + element.id ).addClass("col-xs-6");
			$("#text-" + element.id ).addClass("col-xs-6");
		}*/
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
		if (size < this.TABLET) {
			this.itemRows = 2;
		}

		if (size <= this.MOBILE) {
			this.itemRows = 1;
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