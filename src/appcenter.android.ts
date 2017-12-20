import { Common, IAppCenter } from './appcenter.common';

export class AppCenter extends Common implements IAppCenter {
    constructor(private applicationContext: android.app.ContextImpl) {
        super();
    }

    startAnalyticsAndCrashDetection(appSecret: string): void {
        const services = [
            com.microsoft.appcenter.analytics.Analytics.class,
            com.microsoft.appcenter.crashes.Crashes.class
        ];
        com.microsoft.appcenter.AppCenter.start(
            this.applicationContext,
            appSecret,
            services
        );
    }
}
