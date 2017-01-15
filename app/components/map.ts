import {Component} from '@angular/core';
/**
 * Diese Komponente wird bei einer Karte verwendet
 */
@Component({
  selector: 'coso-map',
  templateUrl: 'app/templates/map.html',
})
export class MapComponent {

	/** 
	 * bei der Initialisierung wird die Karte geladen.
	 */
    private ngOnInit() {
        this.loadMap();
    }
	/**
	 * Hier wird die Karte zusammengesetzt und von Google initiiert.
	 */
    private loadMap(): void  {    	
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
}