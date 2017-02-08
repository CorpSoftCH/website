import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { HeaderComponent }  from './components/header';
import { SectionComponent }  from './components/section';
import { ItemComponent }  from './components/item';
import { CarouselComponent }  from './components/carousel';
import { MapComponent }  from './components/map';
import { ContentComponent }  from './components/content';
import { ProductsComponent }  from './components/products';

import { TestComponent }  from './components/test';

import { RouterModule, Routes }   from '@angular/router';

//Diese Komponenten müssen deklariert und gebootstrapped werden.
const cosoComponents = [
    HeaderComponent,
    ContentComponent
]

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'home',  component: SectionComponent },
  { path: 'products',  component: ProductsComponent },
  { path: 'test', component: TestComponent },
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
    //providers:    [{provide: APP_BASE_HREF, useValue: '/'}],
    declarations: [ ...cosoComponents, ItemComponent, CarouselComponent, TestComponent, SectionComponent, MapComponent, ProductsComponent],
    bootstrap:    [ ...cosoComponents],
})
class AppModule {}

//Dieses Modul wird gebootstrapped
platformBrowserDynamic().bootstrapModule(AppModule);
