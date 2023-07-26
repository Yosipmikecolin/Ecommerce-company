import Category from "@/components/category/Category";
import Services from "@/components/services/Services";
import Slider from "@/components/slider/Slider"
import Products from "@/components/products/Products"

export default function Home() {
    return (
      <main>
        <Slider/>
        <Services/>
        <Category/>
        <Products/>
      </main>
    );
  }
  