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
            <Input name={`items.${index}.quantity`} value={10} />
            <Input name={`items.${index}.price.amount`} value='12'/>
            <Input name={`items.${index}.price.currency`} value='EUR'/>
            <Input name={`items.${index}.name`} value='10 EUR'/>
            <Input name={`items.${index}.category`} value='Cash'/>
            <Input name={`items.${index}.subcategory`} value='Inflation'/>
            <Input name={`items.${index}.sku`} value='abc'/>
            <Input name={`items.${index}.brand`} value='eu'/>
        </>
    )
}

export default Items;