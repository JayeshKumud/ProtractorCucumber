var log4jsJson = {
  appenders: {
    console: {
      type: 'console',
      category: 'console',
    },
    file: {
      category: 'test-file-appender',
      type: 'file',
      filename: 'logs/debug/log.log',
      maxLogSize: 10240,
      backups: 3,
      pattern: '%d %p %c %x{user} %m%n',
    },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'DEBUG' },
    file: { appenders: ['file'], level: 'DEBUG' },
  },
};

export class Logger {
  /**
   * Logs logger
   * @param message
   * @param [level]
   */
  static log(message: any, level: Level = Level.debug): void {
    var log4js = require('log4js');
    log4js.configure(log4jsJson);
    var _log = log4js.getLogger(); //for both console and file

    if (level == Level.debug) {
      _log.level = 'debug';
      _log.debug(message);
    } else if (level == Level.trace) {
      _log.level = 'trace';
      _log.trace(message);
    } else if (level == Level.warn) {
      _log.level = 'debug';
      _log.debug(message);
    } else if (level == Level.info) {
      _log.level = 'info';
      _log.info(message);
    } else if (level == Level.error) {
      _log.level = 'error';
      _log.error(message);
    } else if (level == Level.fatal) {
      _log.level = 'fatal';
      _log.fatal(message);
    }
  }
}

export enum Level {
  debug,
  trace,
  info,
  warn,
  error,
  fatal,
}
