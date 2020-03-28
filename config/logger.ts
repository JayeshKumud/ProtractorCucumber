export class logger{

    static Log(): any {
        var log4js = require('log4js');
        log4js.configure('./config/log4js.json'); 
        var log = log4js.getLogger(); //for both console and file
        //let log = log4js.getLogger("default"); // for file only
        return log;
    }
}