import {useState} from 'react';
import Title from './components/Title';
import InputForm from './components/InputForm';
import ToDo from './components/ToDo';

const App = () => {

    const [toDo, setToDO] = useState(['test']);

    const addToDo = (input) => {
        setToDO([...toDo, input])
    }


    return (
        <>
            <Title />
            <InputForm addToDo={addToDo}/>
            <ToDo toDo={toDo}/>
        </>

    )
    
}

export default App