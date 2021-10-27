import React from "react";
import "./EditPages.css";
import EditContent from "./EditContent";
export const EditMain = ({ data }) => {
  if (data !== undefined) {

    return (
      <EditContent data={data} />
    )
  }
}