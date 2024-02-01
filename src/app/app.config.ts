import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { errorhandlerInterceptor } from './core/interceptors/errorhandler.interceptor';

import { SearchComponent } from './search/search.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideHttpClient(withInterceptors([errorhandlerInterceptor]), withFetch()), FormsModule, ReactiveFormsModule, SearchComponent]
};
