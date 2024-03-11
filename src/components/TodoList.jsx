import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoList() {
    const [todo, setTodo] = useState({
        description: "",
        priority: "",
        date: ""
    });
    
    const [todos, setTodos] = useState([]);

    const [columnDefs, setColumnDefs] = useState([
        { field: 'description', floatingFilter: true, filter: true, editable: true},
        { field: 'priority', floatingFilter: true, filter: true, 
        cellStyle: params => params.value === "High" ? {color: "red"} : {color: "black"}
        },
        { field: 'date', floatingFilter: true, filter: true}
    ]);

    const handleClick = () => {
        if (todo.description && todo.date && todo.priority) {
            setTodos([...todos, todo]);
            setTodo({ description: "", date: "", priority: "" });
        } else {
            alert("type description!");
        }
    }

    return (
        <>
            <input
                placeholder="description"
                value={todo.description}
                onChange={e => setTodo({ ...todo, description: e.target.value })}
            />
            <input
                placeholder="priority"
                value={todo.priority}
                onChange={e => setTodo({ ...todo, priority: e.target.value })}
            />
            <input
                type="date"
                value={todo.date}
                onChange={e => setTodo({ ...todo, date: e.target.value })}
            />
            <button onClick={handleClick}>Add Todo</button>

            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    rowData={todos}
                    columnDefs={columnDefs}
                />
            </div>
        </>
    );
}

export default TodoList;