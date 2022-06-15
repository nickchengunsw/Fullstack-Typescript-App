import { AxiosError, AxiosResponse } from 'axios';
import React, { useState } from 'react';
import Api from '../../service/api';
import Input from '../input/Input';
import ItemList from '../items/Items';
import Response from '../response/Response';
import { useOrderState } from '../stateManagement/OrdersObjectContainer';
import { container } from '../styles/form-styles';
const Form = () => {
    const api = new Api();
    const orderState = useOrderState();
    const [response, setResponse] = useState<AxiosResponse | null>();
    const submit = async (e : any) => {
        e.preventDefault();
        const orderObject = JSON.parse(JSON.stringify(orderState.state));
        let res;
        try { 
            res = await api.createOrder(orderObject);
            setResponse(res);
        } catch (error) {
            const err = error as AxiosError
            setResponse(err.response);
        }
    }

    return (
        <>
            <div style={container}>
                <form>
                    <Input name='totalAmount.amount' value='10' required/>
                    <Input name='totalAmount.currency' value='EUR' required/>
                    <Input name='consumer.givenNames' value='John' required/>
                    <Input name='consumer.surname' value='Doe' required/>
                    <Input name='consumer.email' />
                    <Input name='consumer.phoneNumber' />
                    <Input name='shipping.countryCode' value='NL' required/>
                    <Input name='shipping.name' value='John Doe' required/>
                    <Input name='shipping.postCode' value='1234AB' required/>
                    <Input name='shipping.line1' value='Street 1' required/>
                    <Input name='shipping.phoneNumber' />
                    <Input name='shipping.suburb' />
                    <Input name='merchant.redirectCancelUrl' value='https://portal.integration.scalapay.com/failure-url' required/>
                    <Input name='merchant.redirectConfirmUrl' value='https://portal.integration.scalapay.com/success-url' required/>
                    <ItemList />
                    <button data-testid='submit-button' onClick={(e) => submit(e)}> Submit! </button>
                    {response && <Response response={response} />}
                </form>
            </div>
        </>
    )
}
export default Form;