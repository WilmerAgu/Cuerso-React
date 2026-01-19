import './TodoCounter.css';

function TodoCounter({ total, completed}) {

    if (total > 0 && completed === total){
        return (
            <h1 className="TodoCounter">
                ¡Muy bien! Has completado todas las tareas
            </h1>
        )
    };

    return (
        <h1 className="TodoCounter"> 
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
    )
}


export { TodoCounter }; 