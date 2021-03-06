import {Component} from '@angular/core';
import {ProduktService, Produkt } from '../services/produkte-service.ts';
//import  * as $ from 'jquery';

/**
 * Diese Komponente wird für die Produkte-Page verwendet
 */
@Component({
  selector: 'products',
  templateUrl: 'app/templates/products.html',
  providers: [ProduktService]
})
export class ProductsComponent {
    sections: any;
    
    constructor(private service: ProduktService) {}

    ngOnInit() {
      this.sections = this.service.getProdukte();
      
    }

    ngAfterViewInit() {
      this.fixHoehe();
      this.setBtnBottom();
      this.setLizTop();
    }


    setBtnBottom() {
      $(".btn-div").css({ position: "absolute", left: "1px", right: "1px"});
    }

    addFullPackClass() {

    }

    setLizTop() {
      //$(".prodLizenzen").css({ position: "absolute", top: "0", right: "0"});
    }


    fixHoehe() {
      var prd:any = $(".produkt");
      prd = [...prd];
      var height = 0;
      for(let e of prd) {
        if (e.offsetHeight > height) {
          height = e.offsetHeight;
        }
      }
      for(let e of prd) {
        e.style.height = height + 0 + "px";
      }
    }

    

    goTo(ziel: string) {
      $("html, body").animate({ scrollTop: $('#' + ziel).offset().top }, 1000);
    }
}