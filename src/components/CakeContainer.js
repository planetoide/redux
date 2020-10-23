import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>numero de pasteles {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>comprar un pastel</button>
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
     buyCake: () => dispacht(buyCake())
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
