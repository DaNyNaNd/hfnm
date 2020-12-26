import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Family from "../components/family"

const IndexPage = () => {
  const [familyColumns, setFamilyColumns] = useState([1])

  const addNewColumn = () => {
    const newColumn = familyColumns[familyColumns.length - 1] + 1
    setFamilyColumns([...familyColumns, newColumn])
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h2>Add your family members</h2>
      <Family columns={familyColumns} />
      <div style={{ margin: "10px" }} onClick={addNewColumn}>
        <button>Add Family</button>
      </div>
    </Layout>
  )
}

export default IndexPage
