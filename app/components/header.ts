import {Component} from '@angular/core';

@Component({
  selector: 'coso-header',
  templateUrl: 'app/templates/header.html',
})
export class HeaderComponent {
	sections: any;
	win: Window;
    private offSet: number = 60;

	constructor() {
		this.win = window;
	}

	ngAfterContentChecked() {
		this.sections = $(".container:not(#hello)");
	}


	toggleNav(): void {
		$("#navigation ul").toggleClass("toLeft");
	}

	scrollTo(yPoint: number, duration: number) {
		setTimeout(() => {
			this.win.window.scrollTo(0, yPoint- this.offSet);
		}, duration);
		return;
	}
    smoothScroll(eID) {
		var startY = this.currentYPosition();
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
		}
	}

	currentYPosition() {
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) return self.pageYOffset;
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop)
			return document.documentElement.scrollTop;
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) return document.body.scrollTop;
		return 0;
	}
	elmYPosition(eID) {
		var elm = document.getElementById(eID);
		var y = elm.offsetTop;
		var node = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
			node = node.offsetParent;
			y += node.offsetTop;
		} return y;
	}
}