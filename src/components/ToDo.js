import ToDoItem from "./ToDoItem";

const ToDo = ({toDo}) => {

    return(
    <ul>
            {toDo.map(todo => (
                <ToDoItem todo={todo}/>
            ))}
        </ul>
    )
};

export default ToDo;