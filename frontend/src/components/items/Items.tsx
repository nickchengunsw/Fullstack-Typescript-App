import React from 'react';
import { useOrderState } from '../stateManagement/OrdersObjectContainer';
import ItemList from './ItemInput';

const Items = () => {
    const ordersState = useOrderState();
    const itemsArray = JSON.parse((JSON.stringify(ordersState.state.items)));

    const addItem = (event: any) => {
        event?.preventDefault();
        const newItem = ([
            ...itemsArray,
            {
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
            }
        ])
        ordersState.updateState('items', newItem);
    };

    const removeItem = (event: any) => {
        event?.preventDefault();
        const newList = [...itemsArray];
        newList.pop();
        ordersState.updateState('items', newList);
    };
    return (
        <>
            <ItemList {...itemsArray}/>
            <button data-testid='add-item' onClick={(e) => addItem(e)}>
                Add Item
            </button>
            <button data-testid='remove-item' onClick={(e) => removeItem(e)}>
                Remove Item
            </button>
        </>
    )
}

export default Items;