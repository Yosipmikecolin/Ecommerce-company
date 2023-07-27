import { Poppins } from "next/font/google";
import "./Products.css";
import ProductRopa from "./ropa/Ropa";
import ProductYogurt from "./yogurt/Yogurt";
const poppinsBold = Poppins({ subsets: ["latin"], weight: "500" });

const selectProduct = (value: string) => {
  switch (value) {
    case "ropa":
      return <ProductRopa />;

    case "yogurt":
      return <ProductYogurt />;
  }
};

const Products = () => {
  return (
    <>
      <h1 className="text-4xl my-4 text-center" style={poppinsBold.style}>
        Nuestros productos destacados
      </h1>
      <section className="products">{selectProduct("ropa")}</section>
    </>
  );
};

export default Products;
