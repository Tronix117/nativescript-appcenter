declare var AnalyticsCommon: any;

export namespace Analytics {
    export function trackEvent(eventName: string, properties?: object): void {
        if (properties) {
            const sanitizedProps = AnalyticsCommon.sanitizeProperties(properties);
            const keys = Object.keys(sanitizedProps);
            const dict = new java.util.HashMap<string, string>(keys.length);
            keys.forEach(k => {
                dict.put(k, sanitizedProps[k]);
            });

            com.microsoft.appcenter.analytics.Analytics.trackEvent(eventName, dict);
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