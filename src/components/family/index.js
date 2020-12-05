import React, { useState } from 'react';
// import FamilyColumn from './familyColumn';

const Family = () => {
    // const [family, setFamily] = useState([{}]);
    // return <FamilyColumn family={family} setFamily={setFamily}/>
    // const { family, setFamily } = props;
    const [familyMembers, setFamilyMembers] = useState([{
        id: 1,
        name: null,
        family: null,
        selected: false
    }])

    const updateFamilyMember = (memberName, memberId) => {
        const members = [ ...familyMembers ];
        const memberToUpdate = members.find(member => member.id === memberId);
        memberToUpdate.name = memberName;
        setFamilyMembers(members);
    }

    const addNewInput = () => {
        const members = [...familyMembers];
        members.push({
            id: members.length + 1,
            name: null,
            family: null,
            selected: false
        });
        setFamilyMembers(members);
    }

    const addNewColumn = () => {
        console.log('Add New Column')
    }

    return (
        <>
            <div>
                {familyMembers.length === 0 && <input type="text" onChange={e => updateFamilyMember(e.target.value, 1)}/>}
                {familyMembers.map(member => {
                    if (member) {
                    return (<div>
                        <input type="text" value={member.name} onChange={e => updateFamilyMember(e.target.value, member.id)}/>
                    </div>)
                    } else {
                    return (<div>
                        <input type="text"  onChange={e => updateFamilyMember(e.target.value)}/>
                    </div>)
                    }
                })}
                <div onClick={addNewInput}>
                    Add Family Member
                </div>
            </div>
            <div>
                <div onClick={addNewColumn}>
                    Add Family
                </div>
            </div>
        </>
    )
}

export default Family;