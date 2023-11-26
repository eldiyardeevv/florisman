import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../context/ProductContext";
import { useNavigate, useParams } from "react-router";
import { Container } from "@mui/material";
import { SlBasket } from "react-icons/sl";

const DetailsPage = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return (
    <>
      {oneProduct ? (
        <Container sx={{ margin: "50px 0 0 500px " }}>
          <Card sx={{ maxWidth: 445, background: "#ae7183" }}>
            <CardMedia
              sx={{ height: 300 }}
              image={oneProduct.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {oneProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.price}$
              </Typography>
            </CardContent>
            <CardActions sx={{ marginLeft: "65px", gap: "70px" }}>
              <Button
                onClick={() => navigate("/basket")}
                size="small"
                sx={{ color: "white", border: "solid 2px black" }}
              >
                <SlBasket />
                basket
              </Button>
              <Button
                size="small"
                sx={{ color: "white", border: "solid 2px black" }}
              >
                Review basket
              </Button>
            </CardActions>
          </Card>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default DetailsPage;
