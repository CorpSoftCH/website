import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { HeaderComponent }  from 'app/components/header';
import { SectionComponent }  from 'app/components/section';
import { ItemComponent }  from 'app/components/item';
import { CarouselComponent }  from 'app/components/carousel';
import { MapComponent }  from 'app/components/map';

const cosoComponents = [
    HeaderComponent,
    SectionComponent,
    MapComponent,
]



@NgModule({
    imports:      [ BrowserModule ],
    providers:    [{provide: APP_BASE_HREF, useValue: '/'}],
    declarations: [ ...cosoComponents, ItemComponent, CarouselComponent],
    bootstrap:    [ ...cosoComponents],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
