export interface OrdersObject {
    totalAmount : Amount;
    consumer: Consumer;
    shipping: Shipping;
    items: Item[];
    discounts?: Discounts;
    merchant: Merchant;
    merchantReference?: string;
    taxAmount?: Amount;
    type?: string; //we should use enum here
    product?: string // enum
    frequency?: Frequency;
    orderExpiryMilliseconds?: number;

}

export interface Amount {
        amount: string;
        currency: string;
}

export interface Merchant {
    redirectCancelUrl: string;
    redirectConfirmUrl: string;
}

export interface Item {
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

export interface Consumer {
    givenNames: string;
    surname: string;
    phoneNumber?: string;
    email?: string;
}

export interface Shipping {
    countryCode: string;
    name: string;
    postCode: string;
    line1: string;
    phoneNumber?: string;
    suburb?: string;
}

export interface Discounts {
    amount?: Amount[];
    displayName?: string;
}

export interface Frequency {
    number: number;
    frequencyType: string;
}