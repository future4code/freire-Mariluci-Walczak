import React from "react";

function FormEtapa123 (props) {
    return(
        <div>
            <p>{props.pergunta}</p>
            <select>
                {props.selecione.map(selecione => (
                    <option value={selecione}> {selecione}</option>
                ))}
            </select>
        </div>
    )
}
export default FormEtapa123;