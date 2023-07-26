import { BiRightArrowAlt } from "react-icons/bi";
import "./Category.css";
import { Button } from "@mantine/core";

const Category = () => {
  const categories = [
    {
      name: "Nueva colección de carteras",
      url: "https://images.unsplash.com/photo-1630750796704-227a8a8af12b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },

    {
      name: "Pantalones Drill",
      url: "https://images.unsplash.com/photo-1630750796085-5fa9d4dd2818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  return (
    <section className="category">
      {categories.length <= 3 &&
        categories.map((item) => (
          <div
            key={item.name}
            className="box-category"
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <h1>{item.name}</h1>
            <Button
              className="bg-white text-black w-56 h-10 p-3 mt-2"
              variant="white"
              rightIcon={<BiRightArrowAlt size={20} />}
            >
              Conocer
            </Button>
          </div>
        ))}
    </section>
  );
};

export default Category;
