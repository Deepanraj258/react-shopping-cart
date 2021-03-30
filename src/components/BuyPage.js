import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { random, commerce } from "faker";
import CartItem from "./cartitem";

const apiKey = "563492ad6f9170000100000149c942ae632f431da9898e53790ab267";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const BuyPage = ({ addItem }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey
      }
    });
    const { photos } = data;
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.small,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid()
    }));
    setProduct(allProduct);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1>Shopping Cart</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addItem={addItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
