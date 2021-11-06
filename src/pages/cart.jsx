import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import { StoreContext } from "../context/store-context";
import { LineItem } from "../components/line-item";
import { formatPrice } from "../utils/format-price";
import {
  wrap,
  title,
  container,
  table,
  checkoutBox,
  shipping,
  checkoutButton,
  emptyStateContainer,
  emptyStateHeading,
  emptyStateLink,
} from "./cart.module.css";

export default function CartPage() {
  const { checkout, loading } = React.useContext(StoreContext);
  const emptyCart = checkout.lineItems.length === 0;

  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };

  return (
    <Layout>
      <Head title={'Cart'} />
      <div className={wrap}>
        {emptyCart ? (
          <div className={emptyStateContainer}>
            <h1 className={emptyStateHeading}>Your cart is empty</h1>
            <p>
              Looks like you haven’t found anything yet
            </p>
            <Link to="/products/" className={emptyStateLink}>
              View products
            </Link>
          </div>
        ) : (
          <>
            <h1 className={title}>Shopping Cart</h1>
            <div className={container}>
              <table className={table}>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {checkout.lineItems.map((item) => (
                    <LineItem item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
              <div className={checkoutBox}>
                <h3 className={shipping}> Shipping & taxes Calculated at checkout</h3>

                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className={checkoutButton}
                >
                  Checkout • {formatPrice(
                    checkout.subtotalPriceV2.currencyCode,
                    checkout.subtotalPriceV2.amount
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
