import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { HeaderComponent }  from 'app/components/header';
import { SectionComponent }  from 'app/components/section';
import { ItemComponent }  from 'app/components/item';
import { CarouselComponent }  from 'app/components/carousel';
import { MapComponent }  from 'app/components/map';

//Diese Komponenten müssen deklariert und gebootstrapped werden.
const cosoComponents = [
    HeaderComponent,
    SectionComponent,
    MapComponent,
]

/**
 * Dies ist das Hauptmodule und auch das einzige für diesen Umfang.
 * Es ist der Eintrittspunkt in die Applikation.
 * Hier werden auch die Komponenten Deklariert, welche genutzt werden.
 * Die unter bootstrap definierten Komponente werden bereits im Index HTML gebootstrapped.
 */
@NgModule({
    imports:      [ BrowserModule ],
    providers:    [{provide: APP_BASE_HREF, useValue: '/'}],
    declarations: [ ...cosoComponents, ItemComponent, CarouselComponent],
    bootstrap:    [ ...cosoComponents],
})
export class AppModule {}

//Dieses Modul wird gebootstrapped
platformBrowserDynamic().bootstrapModule(AppModule);
