import { createState, useState } from '@hookstate/core';
import { Amount, Consumer, Discounts, Frequency, Item, Merchant, Shipping } from '../../models/orderObject.model';
const orderState = createState({
    totalAmount: {
        amount: '10',
        currency: 'EUR'
    } as Amount,
    consumer: {
        givenNames: 'John',
        surname: 'Doe',
    } as Consumer,
    shipping: {
        countryCode: 'NL',
        name: 'John Doe',
        postCode: '1234AB',
        line1: 'Street 1',
    } as Shipping,
    items: [{
        gtin: '',
        quantity: 0,
        price: {
            amount: '12',
            currency: 'EUR'
        },
        name: '10 EUR',
        category: 'Cash',
        subcategory: ['Inflation'],
        sku: 'abc',
        brand: 'EU'
    }] as Item[],
    merchant: {
        redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
        redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url',
    } as Merchant,
});

export function useOrderState() {
    const state = useState(orderState);
    return({
        get state(){
            return state.get();
        },

        async updateState(key : string, value: any){
            const newState = JSON.parse(JSON.stringify(state.get()));
            await this.setDeepValue(newState, key, value);
            state.set(newState);
        },

        async setDeepValue(obj: any, path: string, val: any){
            try {
                let objTarget = obj;
                const pathArr = path.split('.');
                const len = pathArr.length;
                for (let i = 0; i < len-1; i++){
                    objTarget = objTarget[`${pathArr[i]}`];
                }
                objTarget[pathArr[len-1]] = val;
            } catch (e) {
                console.error('given path does not exist');
            }
        }
    })
}