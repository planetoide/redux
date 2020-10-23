import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakecontainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Numero de pasteles { numOfCakes }</h2>
            <button onClick={() => dispatch(buyCake())}>Comprar pastel</button>
        </div>  
    )
}

export default HooksCakecontainer
