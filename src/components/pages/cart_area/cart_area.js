import { useState } from "react";
import CartClient from "../cart_client/cart_client";
import CartItem from "../cart_product/product_cart";
import BtnSection from "../cart_product/cart_buttons";
import { postOrders } from "../../../services/data";
import "./cart_area.scss";

function CartArea({ products, onClick, addItem, reduceItem }) {
  const [order, setOrder] = useState({
    client: "",
    table: "1",
    products: null,
  });

  function handleClientName(e) {
    setOrder({ ...order, client: e.target.value });
  }

  function handleClientTable(e) {
    setOrder({ ...order, table: e.target.value });
  }

  const productsResume = products.map((item) => {
    return {
      id: item.id,
      qtd: item.qtd,
    }
  })

  function handleProductsResume(e) {
    if (order.products === null) {
      setOrder({ ...order, products: [...productsResume] });
    }

    postOrders(order)
      .then((response) => {
        console.log("resposta ",  response);
       
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  return (
    <section className="cart-area">
      <CartClient
        value={order}
        handleClientName={handleClientName}
        handleClientTable={handleClientTable}
      />
      <CartItem
        itemList={products}
        onClick={onClick}
        addItem={addItem}
        reduceItem={reduceItem}
      />

      <BtnSection confirm={handleProductsResume} />
    </section >
  )
}
export default CartArea;
