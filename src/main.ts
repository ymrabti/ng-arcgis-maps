import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import esriConfig from '@arcgis/core/config';

// Configure ArcGIS API Key (get from https://developers.arcgis.com)
esriConfig.apiKey =
  'AAPTxy8BH1VEsoebNVZXo8HurInnjcyyQHz8EIUwsjjbTpn2fKWwfwlRiVROl23At3pFZM7ZkBkaPtvDNB-XytCM20Y2z0z4Zw8nlvt9qsOQW0e3rCQzja5fQ4C7yItpLlFg67eS32_WufkQ2WWHr0Y4lgJK1UXP9kG1GuaT3LC1sFz676-Dwz1mtODbMhuj-PuVfll8aHorFGh12qA99sflTkgsLeN-NpkV2fLEWLZUNXIODTgXb5lmhydl_9oRbjs1AT1_QH8zefh5';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
