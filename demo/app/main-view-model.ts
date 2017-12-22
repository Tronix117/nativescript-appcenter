import { Observable } from 'tns-core-modules/data/observable';
import { AppCenter, Crashes, Analytics } from 'nativescript-appcenter';
import * as application from "application";
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class HelloWorldModel extends Observable {
  public message: string = "Derp";

  constructor() {
    super();

    if (application.ios) {
        AppCenter.startAnalyticsAndCrashDetection("2b07b15d-3391-40e9-afda-e786589ec100");
    } else if (application.android) {
        AppCenter.startAnalyticsAndCrashDetection("f38e16c0-4cd1-4814-b434-52a5222bfef4");
    }
  }

  generateCrash(): void {
      Crashes.generateTestCrash();
      // dialogs.alert(`Replace me to generate Crash`).then(() => console.log(`Dialog closed.`));
  }

  publishEvent(): void {
      Analytics.trackEvent("Test event", null);
      // event
  }

  publishEventWithProperties(): void {
    Analytics.trackEvent("Test event with properties", { someProp: "someValue" });
    // event
  }
}
