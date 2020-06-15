import { localize } from '../common/localizations';
import { Error } from '../types';

export const parseErrorStatusCode = (error: any): number =>
    error.response.status;

const parseErrorIdentifier = (error: any): string =>
    error.response && error.response.data
        ? error.response.data.error
        : 'undefined';

const parseErrorPayload = (error: any) =>
    error.response && error.response.data ? error.response.data.payload : {};

export const parseError = (error: any): Error => {
    return {
        identifier: parseErrorIdentifier(error),
        payload: parseErrorPayload(error),
    };
};

export const getErrorMessage = (identifier: string): string => {
    switch (identifier) {
        case 'e_email_exists': {
            return localize('api_error.email_exists');
        }
        case 'e_phone_exists': {
            return localize('api_error.phone_exists');
        }
        case 'e_invalid_credentials': {
            return localize('api_error.invalid_credentials');
        }
        case 'e_email_not_found': {
            return localize('api_error.email_not_found');
        }
        case 'e_vehicle_with_active_order': {
            return localize('api_error.vehicle_with_active_order');
        }
        case 'e_internal': {
            return localize('api_error.internal_server_error');
        }
        default: {
            return localize('api_error.unexpected_error');
        }
    }
};
