import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {AngebotPartnerService} from 'app/services/angebot-partner-service';
import {TeamService} from 'app/services/team-service';
import {UnternehmenService} from 'app/services/unternehmen-service';

import HeaderComponent from './header';

@Component({
	selector: 'coso',
	templateUrl: 'app/templates/coso.html',
	directives: [ ROUTER_DIRECTIVES, HeaderComponent ],
	providers: [AngebotPartnerService, TeamService, UnternehmenService],
	precompile: []
	})
export default class CosoComponent implements OnInit {
	angebote: Item[] = [];
	paretner: Item[] = [];
	team: Mitarbeiter[] = [];
	unternehmen: Unternehmen;

	constructor(
		private angPartService: AngebotPartnerService,
		private teamService: TeamService,
		private untService: UnternehmenService
		) {
		this.angebote = angPartService.getAngebote();
		this.partner = angPartService.getPartner();
		this.team = teamService.getTeam();
		this.unternehmen = untService.getUnternehmen();
    }

    ngOnInit() {
    	this.loadMap();
    }

    changeView(element:any)  {
    	element.active = !element.active;
    	element.changeOperator();
    	$("#" + element.id ).toggleClass("hide");
    }

    loadMap() {    	
	    var myLatLng = {lat: 47.1316061, lng: 7.2481453};

	    var mapProp = {
	        center: new google.maps.LatLng(47.1316061,7.2481453),
	        zoom: 16,
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


}