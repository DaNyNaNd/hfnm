import React from "react";
import FamilyColumn from "./familyColumn";

const Family = ({ columns, addNewInput, fullFamily, updateFamilyMember }) => {
  return columns.map((family, index) => (
    <div style={{ display: "flex" }}>
      <FamilyColumn
        index={index}
        addNewInput={addNewInput}
        updateFamilyMember={updateFamilyMember}
        fullFamily={fullFamily}
      />
    </div>
  ));
};

export default Family;
