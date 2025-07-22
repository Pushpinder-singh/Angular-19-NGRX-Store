import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TodosReducer } from './Store/reducers/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(TodosReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(), // disables dispatch logging in production
      autoPause: true, // pauses recording when devtools not open
    }),
  ],
};
