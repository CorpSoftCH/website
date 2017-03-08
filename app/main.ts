import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { HeaderComponent }  from 'app/components/header';
import { SectionComponent }  from './components/section';
import { ItemComponent }  from './components/item';
import { CarouselComponent }  from './components/carousel';
import { MapComponent }  from './components/map';
import { ContentComponent }  from './components/content';
import { ProductsComponent }  from './components/products';
import { HelloComponent }  from './components/hello';
import { ServicesComponent }  from './components/services';

import { TestComponent }  from './components/test';


//Diese Komponenten müssen deklariert und gebootstrapped werden.
const cosoComponents = [
    HeaderComponent,
    ContentComponent,
    HelloComponent
]

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',              component: SectionComponent },
  { path: 'home/:title',       component: SectionComponent },
  { path: 'products',          component: ProductsComponent },
  { path: 'products/:title',   component: ProductsComponent },
  { path: 'services',          component: ServicesComponent },
  { path: 'services/:title',   component: ServicesComponent },
  { path: 'test',              component: TestComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
class AppRoutingModule {}


/**
 * Dies ist das Hauptmodule und auch das einzige für diesen Umfang.
 * Es ist der Eintrittspunkt in die Applikation.
 * Hier werden auch die Komponenten Deklariert, welche genutzt werden.
 * Die unter bootstrap definierten Komponente werden bereits im Index HTML gebootstrapped.
 */
@NgModule({
    imports:      [ BrowserModule, AppRoutingModule],
    declarations: [ ...cosoComponents, ItemComponent, CarouselComponent, TestComponent, SectionComponent, MapComponent, ProductsComponent, ServicesComponent],
    providers:    [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ...cosoComponents],
})
class AppModule {}

enableProdMode();
//Dieses Modul wird gebootstrapped
platformBrowserDynamic().bootstrapModule(AppModule);
