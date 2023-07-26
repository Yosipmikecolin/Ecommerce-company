import { Button } from "@mantine/core";
import { BiRightArrowAlt, BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "./Slider.css";
import { sliders } from "./utils";
import { useState } from "react";
import Link from "next/link";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextSlider = () => {
    index < sliders.length - 1 && setIndex(index + 1);
  };

  const prevSlider = () => {
    index > 1 - 1 && setIndex(index - 1);
  };

  return (
    <section className="slider">
      <div className="controller-slider">
        <div className="button-left" onClick={prevSlider}>
          <BiChevronLeft
            size={20}
            style={{ color: `${index === 0 ? "#DDE6ED" : "black"}` }}
          />
        </div>
        <div className="button-right" onClick={nextSlider}>
          <BiChevronRight
            size={20}
            style={{
              color: `${index === sliders.length - 1 ? "#DDE6ED" : "black"}`,
            }}
          />
        </div>
      </div>
      <img
        src={sliders[index].url}
        alt="prueba"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0.5",
        }}
      />
      <div className="container-text">
        <h1>{sliders[index].text}</h1>

        <Link href={"/products"}>
          <Button
            className="bg-white text-black w-56 h-10 p-3 mt-2"
            variant="white"
            rightIcon={<BiRightArrowAlt size={20} />}
          >
            Comprar ahora
          </Button>
        </Link>
        <section className="flex gap-3 mt-3">
          {sliders.map((item, idex) => (
            <div
              key={item.id}
              onClick={() => setIndex(idex)}
              style={{
                width: 10,
                height: 10,
                backgroundColor: `${
                  index === idex ? "white" : "rgba(255, 255, 255, 0.39)"
                }`,
                borderRadius: "100%",
                cursor: "pointer",
              }}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Slider;
