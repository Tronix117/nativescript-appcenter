
export namespace AppCenter {
    export function startAnalyticsAndCrashDetection(appSecret: string): void {
        const acServices = new NSMutableArray<typeof NSObject>({ capacity: 2});
        acServices.addObject(MSAnalytics.class());
        acServices.addObject(MSCrashes.class());

        MSAppCenter.startWithServices(appSecret, acServices);
    }
}
