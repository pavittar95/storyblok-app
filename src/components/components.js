import React from "react"
import Page from "../UIComponents/Page"
import ComponentNotFound from "../UIComponents/notFound"
import { COMPONENT_TYPE } from "../constants/componentType"

const ComponentList = {
  [COMPONENT_TYPE.PAGE]: Page,
}
const Components = type => {
  console.log(type);
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }

  return ComponentList[type]
}

export default Components
