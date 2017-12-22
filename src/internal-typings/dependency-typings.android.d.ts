declare var com: {
    microsoft: {
        appcenter: {
            AppCenter: {
                start: (applicationContext: android.app.ContextImpl, appSecret: string, services: Array<any>) => void;
            },
            analytics: {
                Analytics: {
                    class: any;
                    trackEvent(eventName: string, properties?: java.util.Map<string, string>): void;
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
