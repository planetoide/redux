import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>numero de helados {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>comprar un helado</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispacht) => {
 return {
    buyIceCream: () => dispacht(buyIceCream())
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
