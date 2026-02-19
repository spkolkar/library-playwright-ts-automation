"use strict";
// import {envConfig} from 'dotenv';
// import { LogType } from '../../enums/LogType';
// import { error, info, log } from 'node:console';
// import test from 'node:test';
// import clc from 'cli-color';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = void 0;
exports.log = log;
// const emoji = {
//   info: 'ℹ️',
//   error: '❌',
//   warning: '⚠️',
//   success: '✅',
//   timing: '⏱️',
//   debug: '🐞',
//   test: '🧪',
// };
// export enum LogType {
//   Error =0,
//   Info =1,
//   Warning =2,
//   Success =3,
//   Debug =4,
//   Timing =5,
//   Test =6
// };
// const LOG_LEVEL = {
//   ERROR: LogType.Error,
//   INFO: LogType.Info,
//   WARNING: LogType.Warning,
//   SUCCESS: LogType.Success,
//   DEBUG: LogType.Debug,
//   TIMING: LogType.Timing,
//   TEST: LogType.Test
// };
// export function log(message: String, type: LogType) {
//   if(LOG_LEVEL !== undefined && LOG_LEVEL < type){
//     return; // Skip logging if the message type is below the configured log level
//   }
//   switch (type) {
//     case LogType.Error:
//      console.log(emoji.error + clc.red(`ERROR:`) + clc.red(message));
//       break;
//     case LogType.Info:
//     console.log(emoji.info + clc.blue(`INFO:`) + clc.blue(message));
//       break;
//     case LogType.Warning:
//       console.log(emoji.warning + clc.xterm(202)(`WARNING: ${message}`));
//       break;
//     case LogType.Success:
//       console.log(`${clc.green(emoji.success)} ${clc.green(message)}`);
//       break;
//     case LogType.Debug:
//      console.log(emoji.debug + clc.magenta(`DEBUG: ${message}`));
//       break;
//     case LogType.Timing:
//       console.log(`${clc.cyan(emoji.timing)} ${clc.cyan(`${message} seconds`)}`);
//       break;
//     case LogType.Test:
//       console.log(`${clc.yellow(emoji.info)}${clc.yellow('Test:')} ${clc.yellow(message)}`);
//       break;
//     default:
//       console.log(`${clc.yellow(emoji.info)} ${clc.yellow(message)}}`);
//     }
//   }
var LogType;
(function (LogType) {
    LogType[LogType["INFO"] = 1] = "INFO";
    LogType[LogType["WARN"] = 2] = "WARN";
    LogType[LogType["ERROR"] = 3] = "ERROR";
})(LogType || (exports.LogType = LogType = {}));
const LOG_LEVEL = LogType.INFO;
function log(message, type) {
    if (LOG_LEVEL !== undefined && type < LOG_LEVEL) {
        return;
    }
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} [${LogType[type]}] ${message}`);
}
