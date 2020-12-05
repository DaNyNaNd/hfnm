import React, { useState } from 'react';
import FamilyInput from './familyInput';

const FamilyColumn = (props) => {
    const { family, setFamily } = props;
    const [familyMembers, setFamilyMembers] = useState([])

    const updateFamilyMember = (memberName, memberId) => {
        const members = [ ...familyMembers ];
        let memberToUpdate;
        if (memberId) {
            memberToUpdate = members.find(member => member.id === memberId);
            memberToUpdate.name = memberName;
        }
        console.log('members', members);
        setFamilyMembers(members);
    }

    const addNewInput = (e) => {
        const members = [...familyMembers];
        members.push({
            id: members.length,
            
        });
        setFamilyMembers(members);
    }

    return (
        <>
            {familyMembers.length === 0 && <input type="text" onChange={e => updateFamilyMember(e.target.value)}/>}
            {familyMembers.map(member => {
                if (member) {
                    <div>
                    <input type="text" value={member.name} onChange={e => updateFamilyMember(e.target.value, member.id)}/>
                </div> 
                } else {
                <div>
                    <input type="text"  onChange={e => updateFamilyMember(e.target.value)}/>
                </div>
                }
            )}
            <div onClick={e => addNewInput(e)}>
                Add Family Member
            </div>
        </>
    )
}

export default FamilyColumn;