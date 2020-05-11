import React from "react";
import CreateTripForm from "./CreateTripForm";
import CreateEditHeader from "../Headers/CreateEditHeader.js";
import { Container, Row, Col } from "reactstrap";

export default function CreatePage() {
  return (
    <div>
      <CreateEditHeader />
        <CreateTripForm />
    </div>
  );
}
