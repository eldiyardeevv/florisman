import { Container } from "@mui/material";
import React from "react";
import Form from "./../form/From";

const AddProduct = () => {
  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default AddProduct;
