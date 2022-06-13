const order = {
    totalAmount: {
        amount: '10',
        currency: 'EUR'
    },
    consumer: {
        givenNames: 'John',
        surname: 'Doe',
    },
    shipping: {
        countryCode: 'NL',
        name: 'John Doe',
        postCode: '1234AB',
        line1: 'Street 1',
    },
    items: [{
        gtin: '123456789',
        quantity: 1,
        price: {
            amount: '10',
            currency: 'EUR'
        },
        name: 'Item 1',
        category: 'Category 1',
        sku: '234'
    }],
    merchant: {
        redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
        redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url'
    },
}

export default order;