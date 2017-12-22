declare var AnalyticsCommon: any;

export namespace Analytics {
    export function trackEvent(eventName: string, properties?: object): void {
        if (properties) {
            com.microsoft.appcenter.analytics.Analytics.trackEventWithProperties(eventName, AnalyticsCommon.sanitizeProperties(properties));
            return;
        }

        com.microsoft.appcenter.analytics.Analytics.trackEvent(eventName);
    }

    export function isEnabled(): boolean {
        return com.microsoft.appcenter.analytics.Analytics.isEnabled();
    }

    export function setEnabled(enabled: boolean): void {
        com.microsoft.appcenter.analytics.Analytics.setEnabled(enabled);
    }
}