import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button
} from "reactstrap";

const CartItem = ({ product, addItem }) => {
  return (
    <Card className="mt-2 mt-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">
          price: Rs{product.productPrice}
        </CardText>
        <Button className="success" onClick={() => addItem(product)}>
          Buy now
        </Button>
      </CardBody>
    </Card>
  );
};
export default CartItem;
