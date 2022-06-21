import axios, { AxiosResponse } from "axios";
import { Response } from "express";
import { OrdersObject } from "../models/orderObject.model";
import { RequestBody } from "../types/ordersPostRequest";

export const request = (object: any) : Promise<AxiosResponse<any, any>> => {
    const options = {
        method: 'POST',
        url: 'https://integration.api.scalapay.com/v2/orders',
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