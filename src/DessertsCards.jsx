import properties from "./Properties/data.json";
import "./DessertsCards.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";
import { useState, useEffect } from "react";

export function DessertsCards({ id }) {
  const dispatch = useDispatch();
  const product = properties[id];

  const [quantity, setQuantity] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    const productInCart = cart.find((item) => item.name === product.name);
    if (!productInCart) {
      setQuantity(0);
      setIsActive(false);
    }
  }, [cart, product.name]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setIsActive(true);
    dispatch(addToCart(product));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(removeFromCart(product));
    } else {
      setQuantity(0);
      setIsActive(false);
      dispatch(removeFromCart(product));
    }
  };

  return (
    <div className={`desserts-card ${isActive ? "active" : ""}`}>
      <div className="card-imageBtn">
        <picture>
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <img
            src={product.image.mobile}
            alt={product.name}
            className="card-img"
          />
        </picture>

        <div className="card-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
            className="card-btnIcon"
          >
            <g fill="#C73B0F" clip-path="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
          <p
            className="card-btnText"
            onClick={() => {
              handleIncrement();
            }}
          >
            Add to Cart
          </p>
        </div>

        <div className="card-btn--active">
          <div className="card-btnsList">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
              id="card-btnDecrement"
              onClick={handleDecrement}
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </div>
          <p className="card-btnElements">{quantity}</p>
          <div className="card-btnsList">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
              id="card-btnIncrement"
              onClick={handleIncrement}
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="card-text">
        <p className="card-textCategory">{product.category}</p>
        <p className="card-textTitle">{product.name}</p>
        <p className="card-textPrice">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
