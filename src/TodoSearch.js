import './TodoSearch.css';

function TodoSearch() {
    return (
        <input
            placeholder="Estudiar React"
            className="TodoSearch"
            onChange={ (event) => {
                console.log(event);
                console.log('utilizando el buscador');
                console.log(event.target.value)
            }}
        />
    )
}

export { TodoSearch };
