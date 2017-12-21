import { Observable } from 'tns-core-modules/data/observable';
import { AppCenter } from 'nativescript-appcenter';
import * as application from "application";

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
}
