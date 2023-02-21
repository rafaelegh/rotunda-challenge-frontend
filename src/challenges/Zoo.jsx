import React from 'react'
import axios from "axios"

export default function Zoo() {
    const nameRef = React.createRef();
    const soundRef = React.createRef();
    const phraseRef = React.createRef();
    const [animal, setAnimal] = React.useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const animal = {
            name: nameRef.current.value,
            sound: soundRef.current.value,
            phrase: phraseRef.current.value,
        }
        const response = await axios.post("http://localhost:3000/api/v1/zoo", animal);
        console.log(response)
        setAnimal(response.data);
    }

    return (
        <>
            <h2>Animal creator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="animalName">animal name: </label>
                    <input name='animalName' type="text" ref={nameRef} />
                </div>
                <div>
                    <label htmlFor="animalSound">animal sound: </label>
                    <input name='animalSound' type="text" ref={soundRef} />
                </div>
                <div>
                    <label htmlFor="animalPhrase">animal phrase: </label>
                    <input name='animalPhrase' type="text" ref={phraseRef} />
                </div>
                <button>Create animal</button>
            </form>
            <div>
                <p>Animal generated: </p>
                <div style={{
                    border: "1px solid black",
                    width: 400,
                    padding: "1rem"
                }}>
                    {Object.entries(animal).map(([key, value]) => {
                        return <p key={key}>
                            {key}: {value}
                        </p>
                    })}
                </div>
            </div>
        </>
    )
}
