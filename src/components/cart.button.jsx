import * as React from "react";
import { Link } from "gatsby";
import CartIcon from "../icons/cart";
import { cartButton, badge, cartButtonWrapper } from "./cart-button.module.css";

export function CartButton({ quantity }) {
  return (
    <div className={cartButtonWrapper}>
      <Link
        aria-label={`Shopping Cart with ${quantity} items`}
        to="/cart"
        className={cartButton}
      >
        <CartIcon />
        {quantity > 0 && <div className={badge}>{quantity}</div>}
      </Link>

    </div>
  );
}
