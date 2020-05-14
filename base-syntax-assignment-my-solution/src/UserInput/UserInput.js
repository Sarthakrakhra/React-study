import React from 'react';

const UserInput = (props) => {
    const style = {
        border: '2px solid red',
        boxShadow: '0 2px 3px #ccc',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginTop: '-2%'
    };
    return (
        <div style={style} >
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
export default UserInput;