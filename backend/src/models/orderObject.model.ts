export interface OrdersObject {
    totalAmount : Amount;
    consumer: {
        givenNames: string;
        surname: string;
        phoneNumber?: string;
        email?: string;
    }

    shipping: {
        countryCode: string;
        name: string;
        postCode: string;
        line1: string;
        phoneNumber?: string;
        suburb?: string;
    }

    items: Item[];

    discounts?: {
        amount: Amount[];
        displayName: string;
    };

    merchant: MerchantObject;
    merchantReference?: string;
    taxAmount?: Amount;
    type?: string; //we should use enum here
    product?: string // enum
    frequency?: {
        number: number;
        frequencyType: string;
    }
    orderExpiryMilliseconds?: number;

}

interface Amount {
        amount: string;
        currency: string;
}

interface MerchantObject {
    redirectCancelUrl: string;
    redirectConfirmUrl: string;
}

interface Item {
    gtin?: string;
        quantity: number;
        price: {
            amount: string;
            currency: string;
        };
        name: string;
        category: string;
        subcategory?: [string]
        sku: string;
        brand?: string;
}