import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';




// cette ligne est remplacée par BootstrapApplication
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

/**
 * ici provideHttpClient() permet d'accèder aux fonctionnalités du HttpClientModule
 * ici provideRouter(routes), permet de faire passer le fichier de routing
 *
 */
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),

  ],
}).catch((err) => console.error(err));
