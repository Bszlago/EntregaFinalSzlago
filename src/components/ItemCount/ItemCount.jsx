import React from 'react'
import { useState } from "react";

const ItemCount = ({stock, inicial, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={decrementarContador}> - </button>
                <p> {contador} </p>
                <button onClick={incrementarContador}> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </>
    )
}



export default ItemCount