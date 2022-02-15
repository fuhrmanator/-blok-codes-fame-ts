import base, { IConfig as IConfigBase } from 'config';
import { Level, levels, Settings } from '../../config/Settings';

export interface IConfig extends IConfigBase {
    getTyped: <T extends keyof Settings>(setting: T) => Settings[T];
}

const getTyped = <T extends keyof Settings>(setting: T): Settings[T] => base.get(setting);
const config: IConfig = { ...base, getTyped };

export { config, levels, Level };
