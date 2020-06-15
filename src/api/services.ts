import { apiRequest, apiRequestSecure } from './requests';

import { apiKey, endpoints } from './config';

export const services = {
    auth: () => apiRequest.post(endpoints.auth, { apiKey }),
    image: (page: number) => apiRequestSecure.get(endpoints.images(page)),
    imageDetails: (imageId: string) =>
        apiRequestSecure.get(endpoints.imageDetails(imageId)),
};
