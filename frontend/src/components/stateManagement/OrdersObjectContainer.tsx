import { createState, useState } from '@hookstate/core';
import { Amount, Consumer, Discounts, Frequency, Item, Merchant, Shipping } from '../../models/orderObject.model';
const orderState = createState({
    totalAmount: {} as Amount,
    consumer: {} as Consumer,
    shipping: {} as Shipping,
    items: [{
        gtin: '',
        quantity: 0,
        price: {
            amount: '',
            currency: ''
        },
        name: '',
        category: '',
        subcategory: [''],
        sku: '',
        brand: ''
    }] as Item[],
    discounts: {} as Discounts,
    merchant: {} as Merchant,
    merchantReference: '',
    taxAmount: {} as Amount,
    type: '',
    product: '',
    frequency: {} as Frequency,
    orderExpiryMilliseconds: 0,
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