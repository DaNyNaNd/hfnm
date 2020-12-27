import React, { useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Family from "../components/family";
import { giftList } from "../utils/familyGiftGenerator";

const IndexPage = () => {
  const [familyColumns, setFamilyColumns] = useState([1]);
  const [fullFamily, setFullFamily] = useState([
    {
      id: 1,
      name: null,
      family: 0,
      selected: false,
    },
  ]);
  const [matchedFamily, setMatchedFamily] = useState(null);

  console.log("fullFamily", fullFamily);

  const addNewColumn = () => {
    const currentColumnCount = familyColumns[familyColumns.length - 1];
    const newColumn = currentColumnCount + 1;
    addNewInput(currentColumnCount);
    setFamilyColumns([...familyColumns, newColumn]);
  };

  const updateFamilyMember = (memberName, memberId) => {
    const members = [...fullFamily];
    const memberToUpdate = members.find(member => member.id === memberId);
    memberToUpdate.name = memberName;

    setFullFamily(members);
  };

  const addNewInput = index => {
    const members = [...fullFamily];
    members.push({
      id: members.length + 1,
      name: null,
      family: index,
      selected: false,
    });
    setFullFamily(members);
  };

  const matchMembers = () => {
    const matchFamily = giftList(fullFamily);
    console.log("matchedFamily", matchFamily);
    setMatchedFamily(matchFamily);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Add your family members</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Family
          addNewInput={addNewInput}
          updateFamilyMember={updateFamilyMember}
          columns={familyColumns}
          fullFamily={fullFamily}
        />
        <div style={{ margin: "10px" }} onClick={addNewColumn}>
          <button>Add Family</button>
        </div>
      </div>
      <div style={{ margin: "10px", width: "100%" }} onClick={matchMembers}>
        <button>Match Family Members</button>
      </div>
      {matchedFamily && matchedFamily.map(match => <div>{match}</div>)}
    </Layout>
  );
};

export default IndexPage;
