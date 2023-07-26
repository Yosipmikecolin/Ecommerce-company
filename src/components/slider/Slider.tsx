import { Button } from "@mantine/core";
import { BiRightArrowAlt, BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "./Slider.css";
import { sliders } from "./utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import "animate.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [opacityImagen, setOpacityImagen] = useState("0.5");
  const [animationText, setAnimationText] = useState(
    "animate__animated animate__fadeInUp"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < sliders.length - 1) {
        setTimeout(() => {
          setIndex((prev) => prev + 1);
        }, 600);
        activeAnimation();
      } else {
        setTimeout(() => {
          setIndex(0);
        }, 600);
        activeAnimation();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [index, sliders]);

  const nextSlider = () => {
    if (index < sliders.length - 1) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 600);
      activeAnimation();
    }
  };

  const prevSlider = () => {
    if (index > 1 - 1) {
      setTimeout(() => {
        setIndex(index - 1);
      }, 600);
      activeAnimation();
    }
  };

  const activeAnimation = () => {
    setTimeout(() => {
      setAnimationText("animate__animated animate__fadeOutUp");
      setOpacityImagen("0.1");
    }, 300);

    setTimeout(() => {
      setAnimationText("animate__animated animate__fadeInDown");
      setOpacityImagen("0.5");
    }, 600);
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
        alt={sliders[index].text}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "500ms ease",
          opacity: opacityImagen,
        }}
      />
      <div className="container-text">
        <h1 className={animationText}>{sliders[index].text}</h1>

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
