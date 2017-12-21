import * as application from "application";

export namespace AppCenter {
    export function startAnalyticsAndCrashDetection(appSecret: string): void {
        const services = [
            com.microsoft.appcenter.analytics.Analytics.class,
            com.microsoft.appcenter.crashes.Crashes.class
        ];
        com.microsoft.appcenter.AppCenter.start(
            application.android.context,
            appSecret,
            services
        );
    }
}
