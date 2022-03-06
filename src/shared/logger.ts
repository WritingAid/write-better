// Simple util for logging to console.
// Ensure output level is set to 'verbose' to see debug logs.
export class Logger {
    static debugMode = true;
    tag: string = "";
    constructor(tag: string) {
        this.tag = tag;
    }

    debug(...logs: any[]) {
        if (!Logger.debugMode) {
            return;
        }
        const d = new Date(Date.now());
        console.debug("%c%s %s", "color: blue", `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
    }

    log(...logs: any[]) {
        if (!Logger.debugMode) {
            return;
        }
        const d = new Date(Date.now());
        console.log("%c%s %s", "color: blue", `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
    }

    warn(...logs: any[]) {
        if (!Logger.debugMode) {
            return;
        }
        const d = new Date(Date.now());
        console.warn("%c%s %s", "color: blue", `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
    }

    error(...logs: any[]) {
        if (!Logger.debugMode) {
            return;
        }
        const d = new Date(Date.now());
        console.error("%c%s %s", "color: blue", `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}]`, this.tag, ...logs);
    }
}