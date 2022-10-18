import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import "../ItemListContainer/ItemListContainer.css"

const Item = ({ product }) => {
  return (
    
    <Card  className={"cardItem"}>
      <CardActionArea>
        <CardMedia
          className={'cardImg'}
          component="img"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Detalles
        </Button>
      </CardActions>
    </Card>
  );
};


export default Item;
