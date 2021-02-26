import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">₦{price * 360}</span>
    <div className="remove-button">&#10006;</div>
  </div>
);

export default CheckoutItem;
