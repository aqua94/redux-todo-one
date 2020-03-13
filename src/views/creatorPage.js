import React from 'react';
import {connect} from 'react-redux';
import {getValue,makePoint} from '../store/actions/actions';

const creatorPage = ({inputText,dispatch}) => {
    return(
        <div>
            <input defaultValue = {inputText} onChange = {(event)=>dispatch(getValue(event))}></input>
            <button onClick = {()=>dispatch(makePoint(inputText))}>Добавить пункт</button>
        </div>
    )
};

 const mapStateToProps = ({firstReducer}) => {
    return {
        inputText: firstReducer.inputText
    }
}

export default connect(mapStateToProps)(creatorPage);