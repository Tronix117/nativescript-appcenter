
export namespace AnalyticsCommon {
    export function sanitizeProperties(props: object): object {
        // Only string:string mappings are supported currently.
        const result = {};
        Object.keys(props).forEach((key) => {
            switch (typeof props[key]) {
                case 'string':
                case 'number':
                case 'boolean':
                    result[key] = `${props[key]}`;
                    break;
                case 'undefined':
                    break;
                default:
                    throw new Error('Properties cannot be serialized. Object must only contain strings');
            }
        });
        return result;
    }
}