import {Component} from '@angular/core';
import {Router} from '@angular/router';
//import  * as $ from 'jquery';
/**
 * Diese Komponente wird für den Header eingesetzt.
 */
@Component({
  selector: 'coso-header',
  templateUrl: 'app/templates/header.html',
})
export class HeaderComponent {
	sections: any;
	win: Window;
    private offSet: number = 60;
	state: string;
	mode: Array<String>;

	/**
	 * Der Konstruktor speichert die Fensterdaten in einer Variablen.
	 */
	constructor(private route: Router) {
		this.win = window;
	}
	/**
	 * Nachdem der Content geladen wurde werden alle Sektionen, ausser der ersten ins section-Array geladen.
	 */
	private ngAfterContentChecked() {
		var tempsections =  $(".container:not(#hello)");
		//debugger;
		this.sections = Array.from(tempsections);
		//debugger;
		this.state = this.route.url;
		this.mode = this.route.url.split("/");	
	}

	/**
	 * In dieser Funktion wird die Navigation ein- / ausgeblendet.
	 */
	private toggleNav(): void {
		$("#navigation ul").toggleClass("toLeft");
	}
	 /**
	  * Diese Funktion initiiert eine Bewegung durch die Seite.
	  * @yPoint gibt den Ort auf der Page an.
	  * @duration gibt die Dauer an, bis die Seite an der Stelle sein soll.
	  */
	private scrollTo(yPoint: number, duration: number) {
		setTimeout(() => {
			this.win.window.scrollTo(0, yPoint- this.offSet);
		}, duration);
		return;
	}
	/**
	 * Diese Funktion wird aufgerufen, um mit einer Bewegung zu einer Sektion zu gelangen.
	 * @eID die ID der Sektion, zu der gescrollt werden soll.
	 */
    private smoothScroll(eID: any) {
		setTimeout(function(){ //hack
			$("html, body").animate({ scrollTop: $('#' + eID).offset().top - 70 }, 1000);
		}, 100);
		/*var startY = this.currentYPosition();
		var stopY = this.elmYPosition(eID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			this.win.window.scrollTo(0, stopY); return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 100);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
			for (var i = startY; i < stopY; i += step) {
				this.scrollTo(leapY, timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
		}
		for (var i = startY; i > stopY; i -= step) {
			this.scrollTo(leapY, timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}*/
	}

	/**
	 * Hier wird ermittelt. Wo man sich auf der Webseite befindent.
	 */
	private currentYPosition() {
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) return self.pageYOffset;
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop)
			return document.documentElement.scrollTop;
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) return document.body.scrollTop;
		return 0;
	}

	/**
	 * Hier wird ermittelt, wo sich die Zielsektion befindet.
	 */
	private elmYPosition(eID: any) {
		var elm = document.getElementById(eID);
		var y = elm.offsetTop;
		var node:any = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
			node = node.offsetParent;
			y += node.offsetTop;
		} return y;
	}
}