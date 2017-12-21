
declare class MSAppCenter extends NSObject {

	static alloc(): MSAppCenter; // inherited from NSObject

	static configureWithAppSecret(appSecret: string): void;

	static installId(): NSUUID;

	static isAppDelegateForwarderEnabled(): boolean;

	static isConfigured(): boolean;

	static isDebuggerAttached(): boolean;

	static isEnabled(): boolean;

	static logLevel(): MSLogLevel;

	static new(): MSAppCenter; // inherited from NSObject

	static sdkVersion(): string;

	static setCustomProperties(customProperties: MSCustomProperties): void;

	static setEnabled(isEnabled: boolean): void;

	static setLogHandler(logHandler: (p1: () => string, p2: MSLogLevel, p3: string, p4: string, p5: string, p6: number) => void): void;

	static setLogLevel(logLevel: MSLogLevel): void;

	static setLogUrl(logUrl: string): void;

	static setWrapperSdk(wrapperSdk: MSWrapperSdk): void;

	static sharedInstance(): MSAppCenter;

	static startService(service: typeof NSObject): void;

	static startWithServices(appSecret: string, services: NSArray<typeof NSObject>): void;
}

declare class MSCustomProperties extends NSObject {

	static alloc(): MSCustomProperties; // inherited from NSObject

	static new(): MSCustomProperties; // inherited from NSObject

	clearPropertyForKey(key: string): this;

	setBoolForKey(value: boolean, key: string): this;

	setDateForKey(value: Date, key: string): this;

	setNumberForKey(value: number, key: string): this;

	setStringForKey(value: string, key: string): this;
}

declare class MSDevice extends MSWrapperSdk {

	static alloc(): MSDevice; // inherited from NSObject

	static new(): MSDevice; // inherited from NSObject

	readonly appBuild: string;

	readonly appNamespace: string;

	readonly appVersion: string;

	readonly carrierCountry: string;

	readonly carrierName: string;

	readonly locale: string;

	readonly model: string;

	readonly oemName: string;

	readonly osApiLevel: number;

	readonly osBuild: string;

	readonly osName: string;

	readonly osVersion: string;

	readonly screenSize: string;

	readonly sdkName: string;

	readonly sdkVersion: string;

	readonly timeZoneOffset: number;
}

declare const enum MSLogLevel {

	Verbose = 2,

	Debug = 3,

	Info = 4,

	Warning = 5,

	Error = 6,

	Assert = 7,

	None = 99
}

declare class MSLogWithProperties extends MSAbstractLog {

	static alloc(): MSLogWithProperties; // inherited from NSObject

	static new(): MSLogWithProperties; // inherited from NSObject
}

declare class MSWrapperSdk extends NSObject {

	static alloc(): MSWrapperSdk; // inherited from NSObject

	static new(): MSWrapperSdk; // inherited from NSObject

	readonly liveUpdateDeploymentKey: string;

	readonly liveUpdatePackageHash: string;

	readonly liveUpdateReleaseLabel: string;

	readonly wrapperRuntimeVersion: string;

	readonly wrapperSdkName: string;

	readonly wrapperSdkVersion: string;

	constructor(o: { wrapperSdkVersion: string; wrapperSdkName: string; wrapperRuntimeVersion: string; liveUpdateReleaseLabel: string; liveUpdateDeploymentKey: string; liveUpdatePackageHash: string; });

	initWithWrapperSdkVersionWrapperSdkNameWrapperRuntimeVersionLiveUpdateReleaseLabelLiveUpdateDeploymentKeyLiveUpdatePackageHash(wrapperSdkVersion: string, wrapperSdkName: string, wrapperRuntimeVersion: string, liveUpdateReleaseLabel: string, liveUpdateDeploymentKey: string, liveUpdatePackageHash: string): this;

	isValid(): boolean;
}

declare var kMSACConnectionHttpCodeErrorKey: string;

declare const kMSACConnectionHttpErrorCode: number;

declare var kMSACConnectionHttpErrorDesc: string;

declare const kMSACConnectionSuspendedErrorCode: number;

declare var kMSACConnectionSuspendedErrorDesc: string;

declare var kMSACErrorDomain: string;

declare const kMSACLogInvalidContainerErrorCode: number;

declare var kMSACLogInvalidContainerErrorDesc: string;


declare class MSAnalytics extends MSServiceAbstract {

	static alloc(): MSAnalytics; // inherited from NSObject

	static new(): MSAnalytics; // inherited from NSObject

	static trackEvent(eventName: string): void;

	static trackEventWithProperties(eventName: string, properties: NSDictionary<string, string>): void;
}


declare class MSAbstractLog extends NSObject {

	static alloc(): MSAbstractLog; // inherited from NSObject

	static new(): MSAbstractLog; // inherited from NSObject
}

interface MSCrashHandlerSetupDelegate extends NSObjectProtocol {

	didSetUpCrashHandlers?(): void;

	shouldEnableUncaughtExceptionHandler?(): boolean;

	willSetUpCrashHandlers?(): void;
}
declare var MSCrashHandlerSetupDelegate: {

	prototype: MSCrashHandlerSetupDelegate;
};

declare class MSCrashes extends MSServiceAbstract {

	static alloc(): MSCrashes; // inherited from NSObject

	static disableMachExceptionHandler(): void;

	static generateTestCrash(): void;

	static hasCrashedInLastSession(): boolean;

	static lastSessionCrashReport(): MSErrorReport;

	static new(): MSCrashes; // inherited from NSObject

	static notifyWithUserConfirmation(userConfirmation: MSUserConfirmation): void;

	static setDelegate(delegate: MSCrashesDelegate): void;

	static setUserConfirmationHandler(userConfirmationHandler: (p1: NSArray<MSErrorReport>) => boolean): void;
}

interface MSCrashesDelegate extends NSObjectProtocol {

	attachmentsWithCrashesForErrorReport?(crashes: MSCrashes, errorReport: MSErrorReport): NSArray<MSErrorAttachmentLog>;

	crashesDidFailSendingErrorReportWithError?(crashes: MSCrashes, errorReport: MSErrorReport, error: NSError): void;

	crashesDidSucceedSendingErrorReport?(crashes: MSCrashes, errorReport: MSErrorReport): void;

	crashesShouldProcessErrorReport?(crashes: MSCrashes, errorReport: MSErrorReport): boolean;

	crashesWillSendErrorReport?(crashes: MSCrashes, errorReport: MSErrorReport): void;
}
declare var MSCrashesDelegate: {

	prototype: MSCrashesDelegate;
};

declare class MSErrorAttachmentLog extends MSAbstractLog {

	static alloc(): MSErrorAttachmentLog; // inherited from NSObject

	static attachmentWithBinaryFilenameContentType(data: NSData, filename: string, contentType: string): MSErrorAttachmentLog;

	static attachmentWithTextFilename(text: string, filename: string): MSErrorAttachmentLog;

	static new(): MSErrorAttachmentLog; // inherited from NSObject

	contentType: string;

	data: NSData;

	filename: string;

	constructor(o: { filename: string; attachmentBinary: NSData; contentType: string; });

	constructor(o: { filename: string; attachmentText: string; });

	initWithFilenameAttachmentBinaryContentType(filename: string, data: NSData, contentType: string): this;

	initWithFilenameAttachmentText(filename: string, text: string): this;
}

declare const enum MSErrorLogSetting {

	Disabled = 0,

	AlwaysAsk = 1,

	AutoSend = 2
}

declare class MSErrorReport extends NSObject {

	static alloc(): MSErrorReport; // inherited from NSObject

	static new(): MSErrorReport; // inherited from NSObject

	readonly appErrorTime: Date;

	readonly appProcessIdentifier: number;

	readonly appStartTime: Date;

	readonly device: MSDevice;

	readonly exceptionName: string;

	readonly exceptionReason: string;

	readonly incidentIdentifier: string;

	readonly reporterKey: string;

	readonly signal: string;

	isAppKill(): boolean;
}

declare var MSMSErrorLogAttachmentLogUtilityCategory: string;

interface MSService extends NSObjectProtocol {
}
declare var MSService: {

	prototype: MSService;

	isEnabled(): boolean;

	setEnabled(isEnabled: boolean): void;
};

declare class MSServiceAbstract extends NSObject implements MSService {

	static alloc(): MSServiceAbstract; // inherited from NSObject

	static isEnabled(): boolean;

	static new(): MSServiceAbstract; // inherited from NSObject

	static setEnabled(isEnabled: boolean): void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum MSUserConfirmation {

	DontSend = 0,

	Send = 1,

	Always = 2
}

declare class MSWrapperCrashesHelper extends NSObject {

	static alloc(): MSWrapperCrashesHelper; // inherited from NSObject

	static getCrashHandlerSetupDelegate(): MSCrashHandlerSetupDelegate;

	static new(): MSWrapperCrashesHelper; // inherited from NSObject

	static sendCrashReportsOrAwaitUserConfirmationForFilteredIds(filteredIds: NSArray<string>): boolean;

	static sendErrorAttachmentsWithIncidentIdentifier(errorAttachments: NSArray<MSErrorAttachmentLog>, incidentIdentifier: string): void;

	static setAutomaticProcessing(automaticProcessing: boolean): void;

	static setCrashHandlerSetupDelegate(delegate: MSCrashHandlerSetupDelegate): void;

	static unprocessedCrashReports(): NSArray<MSErrorReport>;
}
