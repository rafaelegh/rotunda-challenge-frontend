import React from 'react'
import axios from "axios"

export default function UrlParser() {
    const formatRef = React.createRef();
    const instanceRef = React.createRef();
    const [hash, setHash] = React.useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const urls = {
            urlFormat: formatRef.current.value,
            urlInstance: instanceRef.current.value,
        }
        const response = await axios.post("http://localhost:3000/api/v1/url-parser", urls);
        setHash(response.data);
    }

    return (
        <>
            <h2>URL Parser</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="urlFormat">URL Format: </label>
                    <input name='urlFormat' type="text" ref={formatRef}/>
                </div>
                <div>
                    <label htmlFor="urlInstance">URL Instance: </label>
                    <input name='urlInstance' type="text" ref={instanceRef}/>
                </div>
                <button>send url</button>
            </form>
            <div>
                <p>Hash: </p>
                <div style={{
                    border: "1px solid black",
                    width: 200,
                    padding: "1rem"
                }}>
                    {Object.entries(hash).map(([key, value]) => {
                        return <p key={key}>
                            {key}: {value}
                        </p>
                    })}
                </div>
            </div>
        </>
    )
}
