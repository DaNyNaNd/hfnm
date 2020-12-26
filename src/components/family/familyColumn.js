import React, { useState } from "react"
// import FamilyInput from './familyInput';

const FamilyColumn = props => {
  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 1,
      name: null,
      family: null,
      selected: false,
    },
  ])

  const updateFamilyMember = (memberName, memberId) => {
    const members = [...familyMembers]
    const memberToUpdate = members.find(member => member.id === memberId)
    memberToUpdate.name = memberName

    setFamilyMembers(members)
  }

  const addNewInput = () => {
    const members = [...familyMembers]
    members.push({
      id: members.length + 1,
      name: null,
      family: null,
      selected: false,
    })
    setFamilyMembers(members)
  }

  return (
    <div>
      {familyMembers.length === 0 && (
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            onChange={e => updateFamilyMember(e.target.value, 1)}
          />
        </div>
      )}
      {familyMembers.map(member => {
        if (member) {
          return (
            <div style={{ margin: "10px" }}>
              <input
                type="text"
                value={member.name}
                onChange={e => updateFamilyMember(e.target.value, member.id)}
              />
            </div>
          )
        } else {
          return (
            <div style={{ margin: "10px" }}>
              <input
                type="text"
                onChange={e => updateFamilyMember(e.target.value)}
              />
            </div>
          )
        }
      })}
      <div style={{ margin: "10px" }} onClick={addNewInput}>
        <button>Add Family Member</button>
      </div>
    </div>
  )
}

export default FamilyColumn
