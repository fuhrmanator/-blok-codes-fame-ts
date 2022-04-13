import { TransformableInfo } from 'logform';
import { addColors, config, createLogger, format, Logger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { levels, Settings } from './Settings';

const { align, combine, timestamp, colorize, printf } = format;

const formatter = (info: TransformableInfo): string => `${info.timestamp} ${info.level}: ${info.message}`;

export const buildLogger = (settings: Settings): Logger => {
    const options = settings.getTyped('log');
    const rotation = options.rotation;

    const logger = createLogger({
        defaultMeta: settings.getTyped('app'),
        format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })),
        handleExceptions: true,
        level: options.level,
        levels: config.syslog.levels,
        transports: [
            new transports.Console({
                format: combine(align(), printf(formatter), colorize({ all: true })),
            }),
            new DailyRotateFile({ ...rotation, level: levels.info }),
            new DailyRotateFile({
                ...(rotation as any), // eslint-disable-line @typescript-eslint/no-explicit-any
                filename: 'error-%DATE%.log',
                level: levels.error,
            }),
        ],
    });

    addColors(config.syslog.colors);

    return logger;
};
