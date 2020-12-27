import React from "react";
// import FamilyInput from './familyInput';

const FamilyColumn = ({
  addNewInput,
  fullFamily,
  index,
  updateFamilyMember,
}) => {
  const familyColumn = fullFamily.filter(family => family.family === index);
  return (
    <div>
      {familyColumn.length === 0 && (
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            onChange={e => updateFamilyMember(e.target.value, 1)}
          />
        </div>
      )}
      {familyColumn.map(member => {
        if (member) {
          return (
            <div style={{ margin: "10px" }}>
              <input
                type="text"
                value={member.name}
                onChange={e => updateFamilyMember(e.target.value, member.id)}
              />
            </div>
          );
        } else {
          return (
            <div style={{ margin: "10px" }}>
              <input
                type="text"
                onChange={e => updateFamilyMember(e.target.value)}
              />
            </div>
          );
        }
      })}
      <div style={{ margin: "10px" }} onClick={() => addNewInput(index)}>
        <button>Add Family Member</button>
      </div>
    </div>
  );
};

export default FamilyColumn;
