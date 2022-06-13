import React from 'react';
import { AxiosResponse } from "axios"

export interface Props {
    response : AxiosResponse<any>
}
const Response = (props : Props) => {
    const { response } = props;
    console.log("response: ", response);
    return (
        <>
            <h1>Response</h1>
            <div data-testid='response'>
                {JSON.stringify(response.data, null, 2)}
                Status: {JSON.stringify(response.status, null, 2)}
            </div>
        </>
    )
}

export default Response;