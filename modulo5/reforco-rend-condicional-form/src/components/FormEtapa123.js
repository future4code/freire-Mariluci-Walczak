import React from "react";

function FormEtapa123 (props) {
    return(
        <div>
            <p>{props.pergunta}</p>
            <input onChange={props.onChange} value={props.value}/>
        </div>
    )
}

export default FormEtapa123;