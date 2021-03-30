import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import './style.css'

import BuyPage from "./components/BuyPage";
import Cart from "./components/cart";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addItem = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (isAlreadyAdded !== -1) {
      toast("Already added in the Cart", {
        type: "error"
      });
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Completed", {
      type: "success"
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addItem={addItem} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
