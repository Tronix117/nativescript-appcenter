export declare namespace Analytics {
    function trackEvent(eventName: string, properties: object): void;
    function isEnabled(): boolean;
    function setEnabled(enabled: boolean): void;
}
