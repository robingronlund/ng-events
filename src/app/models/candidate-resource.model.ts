import * as models from './models'

export interface ICandidateResource {
    candidateUuid?: string;
    extId?: string;
    education?: string;
    email?: string;
    firstName?: string;
    gender?: string;
    interests?: string;
    lastName?: string;
    phone?: string;
    registrationDate?: Date;
    status?: string;
    thumbnail?: string;
    type?: string;
    yearOfBirth?: number;
    links?: {
        href: string;
    }
}


export const type = [
    'CUSTOMER', 'THESIS', 'EMPLOYMENT', 'THESIS_EMPLOYMENT', 'UNKNOWN',
];

export const status = [
    'UNKNOWN', 'APPOINT_INTERVIEW', 'EMPLOYED'
];

export const gender = [
    'MALE',
    'FEMALE',
];