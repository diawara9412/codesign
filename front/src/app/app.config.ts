import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),
    provideToastr({
    closeButton: true, positionClass: 'toast-top-right',
    timeOut: 2000,preventDuplicates:false
  })]
};
