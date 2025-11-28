import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  SpotCheck,
  initializeSpotChecks,
} from 'surveysparrow-ionic-plugin/angular-ui';

@Component({
  imports: [RouterModule, SpotCheck],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'spotchecks';

  constructor() {
    this.initSpotChecks();
  }

  ngOnInit(): void {}

  private initSpotChecks(): void {
    try {
      initializeSpotChecks({
        // TODO: Replace with your actual domain name and target token
        domainName: "poornimaprod3.surveysparrow.com",
        targetToken: "tar-3KPVQQohzxaqZ3eLmaGFNB",
        userDetails: {
          // Optional: Add user details for known users
          // email: 'user@example.com',
          // mobile: '1234567890',
          // uuid: 'unique-user-id',
        },
        variables: {
          sparrowLang: 'en', // Language code
        },
        customProperties: {
          // Optional: Add custom properties
          // appVersion: '1.0.0',
        },
      });
      console.log('SpotChecks initialized successfully');
    } catch (error) {
      console.error('Failed to initialize SpotChecks:', error);
    }
  }
}
