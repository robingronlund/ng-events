import * as models from './models';

export interface IEventResource {
    uuId?: string;
    extId?: string;
    address?: string;
    city?: string;
    contact?: string;
    country?: string;
    endDate?: Date;
    host?: string;
    links?: Array<models.ILink>;
    name?: string;
    startDate?: Date;
    type?: string;
    uuid?: string;
    venue?: string;
    website?: string;
    wifiName?: string;
    wifiPwd?: string;
}