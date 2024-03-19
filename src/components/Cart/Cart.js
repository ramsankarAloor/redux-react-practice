import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const cartList = Object.keys(cart).map((id, index) => {
    return (
        <CartItem
          key={index}
          item={{
            id : id,
            title: cart[id].title,
            quantity: cart[id].quantity,
            total: cart[id].quantity * cart[id].price,
            price: cart[id].price,
          }}
        />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartList}</ul>
    </Card>
  );
};

export default Cart;
