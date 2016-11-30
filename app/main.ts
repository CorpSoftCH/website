import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
//import {theRoutes} from 'app/routing/routing';

import CosoComponent from './components/coso'; 


bootstrap(CosoComponent, [
	HTTP_PROVIDERS,
	//provideRouter(theRoutes),
	{provide: LocationStrategy, useClass: HashLocationStrategy}
]);