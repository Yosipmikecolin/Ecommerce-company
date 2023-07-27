import Image from "next/image";
import "./Ropa.css";
import { products } from "@/constants";
import { Button } from "@mantine/core";
import { BiCart } from "react-icons/bi";

const ProductRopa = () => {
  return products.map((item) => (
    <section key={item.id} className="product">
      <Image src={item.image} width={400} height={0} alt={item.name} />
      <h2 className="mt-2">{item.name.toUpperCase()}</h2>
      <h3 className="text-[#9BA4B5]">${item.price}</h3>
      <Button color="indigo" variant="outline" rightIcon={<BiCart size={20} />}>
        Comprar
      </Button>
    </section>
  ));
};

export default ProductRopa;
