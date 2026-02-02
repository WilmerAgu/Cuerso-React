import React from 'react';
import './../TodosLoading/TodosLoading.css'



function TodosError() {

    return (
        <p className="todo-message error">❌ Error al cargar TODOS</p>
    );
}

export { TodosError };
