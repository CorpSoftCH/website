import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {provideRouter} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
//import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';

//import {theRoutes} from 'app/routing/routing';

import CosoComponent from './components/coso'; 


bootstrap(CosoComponent, [
	HTTP_PROVIDERS,
	//Ng2PageScrollModule,
	//provideRouter(theRoutes),
	{provide: LocationStrategy, useClass: HashLocationStrategy}
]);