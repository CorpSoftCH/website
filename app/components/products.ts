import {Component} from '@angular/core';
import {ProduktService} from '../services/produkte-service'
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
    }

    createSlider(content: string, title: string) {
      console.log("created " + content + " " + title);
      $("#slider-" + content + "-" + title).slider();


      $("#destroySlider-" + content + "-" + title).click(function() {

        $("#slider-" + content + "-" + title).slider('destroy');

      });
    }

    setBtnBottom() {
      $(".btn-div").css({ position: "absolute", left: "1px", right: "1px"});
    }


    fixHoehe() {
      var prd = $(".produkt");
      prd = [...prd];
      var height = 0;
      for(let e of prd) {
        if (e.offsetHeight > height) {
          height = e.offsetHeight;
        }
      }
      for(let e of prd) {
        e.style.height = height + 30 + "px";
      }
    }

    

    goTo(ziel: string) {
      $("html, body").animate({ scrollTop: $('#' + ziel).offset().top }, 1000);
    }
}