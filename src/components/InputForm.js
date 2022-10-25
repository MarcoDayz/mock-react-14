import { useState } from "react";

const InputForm = ({addToDo}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addToDo(userInput)
        setUserInput('')
    };



    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange}></input>
            <input type="submit" value="submit"></input>
        </form>
    )
};

export default InputForm;