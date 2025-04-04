import "./BillItem.css";
import { useDispatch } from "react-redux";
import { absoluteRemoveFromCart } from "./cartSlice.jsx";

export function BillItem({ name, price, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="bill-item">
      <div className="bill-itemDetails">
        <h3 className="bill-itemTitle">{name}</h3>
        <div className="bill-itemPrice">
          <p className="bill-itemQuantity">{quantity}x</p>
          <p className="bill-itemPriceValue">@ ${price.toFixed(2)}</p>
          <p className="bill-itemTotal">${(price * quantity).toFixed(2)}</p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        viewBox="0 0 10 10"
        className="bill-itemDelete"
        onClick={() => dispatch(absoluteRemoveFromCart({ name }))}
      >
        <path
          fill="#CAAFA7"
          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
        />
      </svg>
    </div>
  );
}
