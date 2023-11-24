import { Container } from "@mui/material";
import React from "react";
import Form from "./../form/From";

const EditProduct = () => {
  return (
    <Container>
      <Form isEdit={false} />
    </Container>
  );
};

export default EditProduct;
