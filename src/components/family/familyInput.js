import React from 'react';

const FamilyInput = (props) => {
    const { member, onBlur } = props;

    return (<div><input type="text" value={member.name} onBlur={e => onBlur(e)}/></div>)
}

export default FamilyInput;