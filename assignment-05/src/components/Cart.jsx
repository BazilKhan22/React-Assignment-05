import { useCart } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
];

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <h3>Products</h3>
      {products.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
      <h3>Cart Items ({cartItems.length})</h3>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
