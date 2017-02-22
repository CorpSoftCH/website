import {Component} from '@angular/core';
import {ProduktService} from 'app/services/produkte-service'
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

    ngAfterViewChecked() {
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
}