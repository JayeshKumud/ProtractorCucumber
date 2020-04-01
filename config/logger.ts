export class logger {
    static Log(message: string, level: Level = Level.debug): void {

        var log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        var log = log4js.getLogger(); //for both console and file

        if (level == Level.debug) {
            log.level = 'debug';
            log.debug(message);
        } else if (level == Level.trace) {
            log.level = 'trace';
            log.trace(message);
        } else if (level == Level.warn) {
            log.level = 'debug';
            log.debug(message);
        } else if (level == Level.info) {
            log.level = 'info';
            log.info(message);
        } else if (level == Level.error) {
            log.level = 'error';
            log.error(message);
        } else if (level == Level.fatal) {
            log.level = 'fatal';
            log.fatal(message);
        }
    }
}

export enum Level {
    debug,
    trace,
    info,
    warn,
    error,
    fatal
}