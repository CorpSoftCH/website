import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {AngebotService} from 'app/services/angebot'

import HeaderComponent from './header';

@Component({
	selector: 'coso',
	templateUrl: 'app/templates/coso.html',
	directives: [ ROUTER_DIRECTIVES, HeaderComponent ],
	providers: [AngebotService],
	precompile: []
	})
export default class CosoComponent implements OnInit {
	angebote: Angebot[] = [];

	constructor(private angebotService: AngebotService) {
		this.angebote = this.angebotService.getAngebote();
        
    }

    ngOnInit() {
    	this.loadMap();
    }

    changeView(ele: Angebot)  {
    	ele.active = !ele.active;
    	ele.changeOperator();
    	$("#" + ele.id ).toggleClass("hide");
    }


    consoleLog() {
    	console.log("hallo");
    }

    loadMap() {
    	console.log("map");
    	
	    var myLatLng = {lat: 47.1316061, lng: 7.2481453};

	    var mapProp = {
	        center: new google.maps.LatLng(47.1316061,7.2481453),
	        zoom: 16,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        scrollwheel: false,
	    };
	    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	    var image = 'app/data/images/coso_google_marker_klein.png';
	    var marker = new google.maps.Marker({
	      map: map,
	      position: myLatLng,
	      title: 'CoSo',
	      icon: image
	    });
	};


}