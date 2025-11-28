import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trackScreen,
  trackEvent,
} from 'surveysparrow-ionic-plugin/angular-ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isTracking = false;
  trackingStatus = '';

  ngOnInit(): void {
    this.trackHomeScreen();
  }

  /**
   * Track the home screen when component initializes
   * This enables survey triggers based on screen visits
   */
  private async trackHomeScreen(): Promise<void> {
    this.isTracking = true;
    this.trackingStatus = 'Tracking screen...';

    try {
      await trackScreen({
        screen: 'HomeScreen',
        options: {
          // Optional: Override user details for this screen
          // userDetails: {
          //   email: 'user@example.com',
          // },
          variables: {
            sparrowLang: 'en',
          },
          // Optional: Add custom properties
          // customProperties: {
          //   screenSection: 'main',
          // },
        },
      });
      this.trackingStatus = 'Screen tracked successfully!';
      console.log('Home screen tracked successfully');
    } catch (error) {
      this.trackingStatus = 'Screen tracking failed';
      console.error('Error tracking home screen:', error);
    } finally {
      this.isTracking = false;
    }
  }

  /**
   * Example: Track a custom event (e.g., button click)
   * This enables survey triggers based on user actions
   */
  async onButtonClick(): Promise<void> {
    this.trackingStatus = 'Tracking event...';

    try {
      await trackEvent({
        screen: 'HomeScreen',
        event: {
          buttonClickEvent: {
            buttonName: 'primary_action',
            timestamp: new Date().toISOString(),
          },
        },
      });
      this.trackingStatus = 'Event tracked successfully!';
      console.log('Button click event tracked');
    } catch (error) {
      this.trackingStatus = 'Event tracking failed';
      console.error('Error tracking event:', error);
    }
  }

  /**
   * Example: Track a purchase/payment event
   */
  async onPurchaseComplete(): Promise<void> {
    this.trackingStatus = 'Tracking purchase event...';

    try {
      await trackEvent({
        screen: 'HomeScreen',
        event: {
          purchaseCompletedEvent: {
            paymentStatus: 'COMPLETED',
            paymentDoneOn: new Date().toISOString(),
            amount: '99.99',
          },
        },
      });
      this.trackingStatus = 'Purchase event tracked!';
      console.log('Purchase event tracked');
    } catch (error) {
      this.trackingStatus = 'Purchase event tracking failed';
      console.error('Error tracking purchase event:', error);
    }
  }
}

