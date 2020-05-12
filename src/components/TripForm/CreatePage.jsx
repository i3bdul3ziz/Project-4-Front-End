import React from "react";
import CreateTripForm from "./CreateTripForm";
import CreateEditHeader from "../Headers/CreateEditHeader.js";


export default function CreatePage(props) {
  return (
    <div>
      <CreateEditHeader />
        <CreateTripForm company={props.company}/>
    </div>
  );
}
