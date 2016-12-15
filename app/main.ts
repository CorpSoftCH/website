import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import CosoComponent from './components/coso'; 
enableProdMode()

bootstrap(CosoComponent, [
	HTTP_PROVIDERS,
	{provide: LocationStrategy, useClass: HashLocationStrategy}
]);