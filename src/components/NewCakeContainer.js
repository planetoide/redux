import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>numero de pasteles {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>comprar {number} pastel</button>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispacht) => {
 return {
     buyCake: (number) => dispacht(buyCake(number))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
