import React from 'react'
import axios from "axios"

export default function LogError() {
    const inputErrorRef = React.createRef();
    const [errorResponse, setErrorResponse] = React.useState('');

    const handleClickSendError = async () => {
        const errorLog = {
            newError: inputErrorRef.current.value
        }
        const response = await axios.post("http://localhost:3000/api/v1/log-error", errorLog);
        setErrorResponse(errorResponse + '\n' + response.data.response);
    };

    return (
        <>
            <h2>Log error</h2>
            <div>
                <label htmlFor="errorName">Error Name: </label>
                <input name='errorName' type="text" ref={inputErrorRef} />
            </div>
            <button onClick={handleClickSendError} >Send Error</button>
            <div style={{width: 345}}>
                {errorResponse}
            </div>    
        </>
    )
}
