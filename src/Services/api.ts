import axios, { AxiosResponse } from 'axios';

export const baseURL = 'https://dev-api.amauonline.com';

export const services = {
    getCategory: '/v3/category-signup',
}


interface GetParams {
    [key: string]: string | number | boolean | undefined;
}
export const get = async <T>(path: string, params?: GetParams): Promise<T> => {
    try {
        const headers = {
            'Accept': 'application/json',
        };
        const response = await axios.get(`${path}`, { params, headers: headers });

        const status = response.status;
        let respoNew = response.data;
        respoNew.status = status;
        return respoNew;
    } catch (error: any) {

        let msgDynamic = 'Oops';
        if (error?.response?.data?.message) {
            msgDynamic = error.response.data.message;
        } else if (error?.response?.data?.error) {
            msgDynamic = error.response.data.error;
        }
        const failData: any = {
            status: error.response.status,
            message: msgDynamic,
        }
        return failData;
    }
};

export const post = async <T>(path: string, data: any): Promise<T> => {
    try {
        const headers = {
            'Accept': 'application/json',
        };
        const response = await axios.post(`${path}`, data, { headers: headers });
        const status = response.status;
        let respoNew = response.data;
        respoNew.status = status;
        return respoNew;
    } catch (error: any) {
        let msgDynamic = 'Oops';
        if (error?.response?.data?.message) {
            msgDynamic = error.response.data.message;
        } else if (error?.response?.data?.error) {
            msgDynamic = error.response.data.error;
        }

        const failData: any = {
            status: error.response.status,
            message: msgDynamic,
        }
        return failData;

    }
};
