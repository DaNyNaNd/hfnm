import React, { useEffect, useState } from "react"
import FamilyColumn from "./familyColumn"

const Family = ({ columns }) => {
  return columns.map(family => (
    <div style={{ display: "flex" }}>
      <FamilyColumn />
    </div>
  ))
}

export default Family
