import * as models from './models';

export interface IEvent {
    uuId?: string;
    extId?: string;
    address?: string;
    city?: string;
    contact?: string;
    country?: string;
    endDate?: Date;
    host?: string;
    name: string;
    stateDate: Date;
    type: IEvent.TypeEnum;
    venue?: string;
    website?: string;
    wifiName?: string;
    wifiPwd?: string;
}

export namespace IEvent {
    export enum TypeEnum {
        'FAIR',
        'CONFERENCE',
        'SPONTANEOUS',
        'UNKNOWN'
    }
}


