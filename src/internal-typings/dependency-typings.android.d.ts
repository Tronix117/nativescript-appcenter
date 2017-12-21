declare var com: {
    microsoft: {
        appcenter: {
            AppCenter: {
                start: (applicationContext: android.app.ContextImpl, appSecret: string, services: Array<any>) => void;
            },
            analytics: {
                Analytics: {
                    class: any;
                    trackEvent(eventName: string): void;
                    trackEventWithProperties(eventName: string, properties?: object): void;
                    isEnabled(): boolean;
                    setEnabled(enabled: boolean): void
                }
            },
            crashes: {
                Crashes: {
                    class: any;
                    generateTestCrash(): void;
                }
            }
        }
    }
}
