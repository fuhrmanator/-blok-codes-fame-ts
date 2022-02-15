import { addColors, config as system, createLogger, format, Logger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { TransformableInfo } from 'logform';

import { IConfig, levels } from './Config';

const { align, combine, timestamp, colorize, printf } = format;

const formatter = (info: TransformableInfo): string => `${info.timestamp} ${info.level}: ${info.message}`;

export const buildLogger = (config: IConfig): Logger => {
    const options = config.getTyped('log');
    const rotation = options.rotation;

    const logger = createLogger({
        defaultMeta: config.getTyped('app'),
        format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
        handleExceptions: true,
        level: options.level,
        levels: system.syslog.levels,
        transports: [
            new transports.Console({
                format: combine(align(), printf(formatter), colorize({ all: true })),
            }),
            new DailyRotateFile({ ...rotation, level: levels.info }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            new DailyRotateFile({ ...(rotation as any), filename: 'error-%DATE%.log', level: levels.error }),
        ],
    });

    addColors(system.syslog.colors);

    return logger;
};
