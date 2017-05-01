import * as models from './models';

export interface ICandidate {
    candidateUuid?: string;
    extId?: string;
    education?: string;
    email?: string;
    firstName?: string;
    gender?: ICandidate.GenderEnum;
    interests?: string;
    lastName?: string;
    phone?: string;
    registrationDate?: Date;
    status?: string;
    thumbnail?: string;
    type?: ICandidate.TypeEnum;
    yearOfBirth: number;
}

export namespace ICandidate {
    export enum GenderEnum {
        MALE = <any>'MALE',
        FEMALE = <any>'FEMALE'
    }
    export enum TypeEnum {
        CUSTOMER = <any>'CUSTOMER',
        THESIS = <any>'THESIS',
        EMPLOYMENT = <any>'EMPLOYMENT',
        THESISEMPLOYMENT = <any>'THESISEMPLOYMENT',
        UNKNOWN = <any>'UNKNOWN'
    }
}