import React from 'react';
import { Item } from '../../models/orderObject.model';
import Input from '../input/Input';

const Items = (itemsArray: Item[]) => {
    return (
        <>
            {Object.keys(itemsArray).map((_, index) => {
                return (
                <div key={index}>
                    <ItemInput index={index}/>
                </div>)
            })
            }
        </>
    )
}
interface Props {
    index: number;
}
const ItemInput = (props: Props) => {
    const { index } = props;
    return (
        <>
            <Input name={`items.${index}.gtin`} />
            <Input name={`items.${index}.quantity`} />
            <Input name={`items.${index}.price.amount`} />
            <Input name={`items.${index}.price.currency`} />
            <Input name={`items.${index}.name`} />
            <Input name={`items.${index}.category`} />
            <Input name={`items.${index}.subcategory`} />
            <Input name={`items.${index}.sku`} />
            <Input name={`items.${index}.brand`} />
        </>
    )
}

export default Items;