import './hoshi.css';

function Inputinha({id, name, list, type, placeholder, label, title, value, handler, ...rest}){
    return(
        <span class="hoshi">
            <input 
            id={id} 
            name={name} 
            type={type} 
            value={value} 
            title={title} 
            placeholder={placeholder} 
            list={list}
            onChange={handler} /> 
            <label for={id}>
                <span>{label}</span>
            </label>
        </span>
    );
}

export default Inputinha;