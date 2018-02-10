import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { miModulo } from './app/miModulo';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(miModulo)
  .catch(err => console.log(err));
