"use client";
import ProductCardView from "@/app/Shared/Components/ProductCardView";
import useCart from "@/app/Shared/Hooks/useCart";
import useProducts from "@/app/Shared/Hooks/useProducts";
import { Flip } from "react-awesome-reveal";

const AllProducts = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart();

  const handleAddToCart = (product) => {
    const searchProduct = cart.find((prod) => prod.id === product?.id);

    if (!searchProduct) {
      product.count = 1;
      setCart([...cart, product]);
    } else {
      searchProduct.count += 1;
      console.log(cart);
    }
  };

  const handleIncreaseFromCart = (product) => {
    console.log("product", product);
    const increamentedProduct = cart.find((prod) => prod.id === product?.id);
    increamentedProduct.count += 1;
    setCart([...cart]);
  };

  const handleReduceFromCart = (product) => {
    const decreamentedProduct = cart.find((prod) => prod.id === product?.id);

    if (decreamentedProduct?.count === 1) {
      decreamentedProduct.count -= 1;
      setCart(cart.filter((prod) => prod.id !== product.id));
    } else {
      decreamentedProduct.count -= 1;
      setCart([...cart]);
    }
  };

  console.log(cart);

  return (
    <div className='px-8 mt-16'>
      All Products
      <div>
        <div className='grid grid-cols-4 gap-4'>
          {products?.map((product) => (
            <Flip key={product.id} duration={800} triggerOnce>
              <ProductCardView
                cart={cart}
                product={product}
                handleAddToCart={handleAddToCart}
                handleReduceFromCart={handleReduceFromCart}
                handleIncreaseFromCart={handleIncreaseFromCart}
              />
            </Flip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
