import {AnalyticsCommon} from "../analytics.common";

export namespace Analytics {
    export function trackEvent(eventName: string, properties: object): void {
        if (properties) {
            const sanitizedProps = AnalyticsCommon.sanitizeProperties(properties);
            const keys = Object.keys(sanitizedProps);
            const dict = new NSMutableDictionary<string, string>({ capacity: keys.length });
            keys.forEach(k => {
                dict.setValueForKey(sanitizedProps[k], k);
            });

            MSAnalytics.trackEventWithProperties(eventName, dict);
            return;
        }

        MSAnalytics.trackEvent(eventName);
    }

    export function isEnabled(): boolean {
        return MSAnalytics.isEnabled();
    }

    export function setEnabled(enabled: boolean): void {
        MSAnalytics.setEnabled(enabled);
    }
}