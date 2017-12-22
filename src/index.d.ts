export declare namespace AppCenter {
    function startAnalyticsAndCrashDetection(appSecret: string): void;
}

export declare namespace AnalyticsCommon {
    function sanitizeProperties(props: object): object;
}

export declare namespace Analytics {
    function trackEvent(eventName: string, properties?: object): void;
    function isEnabled(): boolean;
    function setEnabled(enabled: boolean): void;
}

export declare namespace Crashes {
    function generateTestCrash(): void;
}
