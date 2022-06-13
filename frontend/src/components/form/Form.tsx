import React from 'react';
import Api from '../../service/api';
import Input from '../input/Input';
import ItemList from '../items/Items';
import { useOrderState } from '../stateManagement/OrdersObjectContainer';
const Form = () => {
    const api = new Api();
    const orderState = useOrderState();
    const submit = (e : any) => {
        e.preventDefault();
        const orderObject = JSON.parse(JSON.stringify(orderState.state));
        api.createOrder(orderObject);
    }

    return (
        <>
            <form>
                <Input name='totalAmount.amount' required/>
                <Input name='totalAmount.currency' required/>
                <Input name='consumer.givenNames' required/>
                <Input name='consumer.surname' />
                <Input name='consumer.email' />
                <Input name='consumer.phoneNumber' required/>
                <Input name='shipping.countryCode' required/>
                <Input name='shipping.name' required/>
                <Input name='shipping.postCode' required/>
                <Input name='shipping.line1' required/>
                <Input name='shipping.phoneNumber' />
                <Input name='shipping.suburb' />
                <Input name='discounts.amount' />
                <Input name='discounts.displayName' />
                <Input name='merchant.redirectCancelUrl' />
                <Input name='merchant.redirectConfirmUrl' />
                <Input name='merchantReference' />
                <Input name='taxAmount.amount' />
                <Input name='taxAmount.currency' />
                <Input name='type' />
                <Input name='product' />
                <Input name='frequency.number' />
                <Input name='frequency.string' />
                <Input name='orderExpiryMilliseconds' />
                <ItemList />
                <button onClick={(e) => submit(e)}> Submit! </button>
            </form>
        </>
    )
}
export default Form;