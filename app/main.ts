import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { HeaderComponent } from './components/header.ts';
import { SectionComponent }  from './components/section.ts';
import { ItemComponent }  from './components/item.ts';
import { CarouselComponent }  from './components/carousel.ts';
import { MapComponent }  from './components/map.ts';
import { ContentComponent }  from './components/content.ts';
import { ProductsComponent }  from './components/products.ts';
import { HelloComponent }  from './components/hello.ts';
import { ServicesComponent }  from './components/services.ts';

import { Http, HttpModule } from '@angular/http';

//import 'zone.js';
//import 'reflect-metadata';

import ItemService from './services/item-service';
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
    imports:      [ BrowserModule, AppRoutingModule, HttpModule],
    declarations: [ ...cosoComponents, ItemComponent, CarouselComponent, SectionComponent, MapComponent, ProductsComponent, ServicesComponent],
    providers:    [HttpModule, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ...cosoComponents],
})
class AppModule {}

enableProdMode();
//Dieses Modul wird gebootstrapped
platformBrowserDynamic().bootstrapModule(AppModule, [HttpModule]);
