import axios, { AxiosResponse } from "axios";

export const request = (object: any) : Promise<AxiosResponse<any, any>> => {
    const options = {
        method: 'POST',
        url: '<url>',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
        data: object
    };
    return axios.request(options).catch(error => {
        throw error;})
}
