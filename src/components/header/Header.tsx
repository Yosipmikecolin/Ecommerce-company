import Link from "next/link";
import "./Header.css";
import { FiShoppingCart, FiUser, FiAlignJustify, FiX } from "react-icons/fi";

import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { carts, navLinks } from "@/constants";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });

const Header = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);

  return (
    <header className={"header"} style={poppins.style}>
      <span>LOGO</span>
      <nav className="menu">
        {navLinks.map((item) => {
          const isActive = pathname?.startsWith(item.route);
          return item.route === "/" ? (
            <Link
              key={item.route}
              href={item.route}
              className={pathname === "/" ? "text-indigo-700" : "text-black"}
            >
              {item.name}
            </Link>
          ) : (
            <Link
              key={item.route}
              href={item.route}
              className={isActive ? "text-indigo-700" : "text-black"}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {activeMenu && (
        <nav className="menu-mobil">
          <FiX
            size={30}
            className="cursor-pointer float-right"
            color="white"
            onClick={() => setActiveMenu(false)}
          />
          <div className="list-menu">
            {navLinks.map((item) => {
              const isActive = pathname?.startsWith(item.route);
              return item.route === "/" ? (
                <Link
                  key={item.route}
                  href={item.route}
                  onClick={() => setActiveMenu(false)}
                  className={
                    pathname === "/" ? "text-indigo-500" : "text-white"
                  }
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.route}
                  href={item.route}
                  className={isActive ? "text-indigo-500" : "text-white"}
                  onClick={() => setActiveMenu(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href={"/profile"}
              className={
                pathname === "/profile" ? "text-indigo-500" : "text-white"
              }
            >
              Perfil
            </Link>
          </div>
        </nav>
      )}

      <div className="cart">
        <FiShoppingCart
          className="cursor-pointer"
          size={20}
          onClick={() => setActiveCart(true)}
        />
        <Link href={"/profile"}>
          <div
            className="icon"
            style={{
              backgroundColor: pathname === "/profile" ? "#6528F7" : "white",
              color: pathname === "/profile" ? "white" : "black",
            }}
          >
            <FiUser size={20} />
          </div>
        </Link>
      </div>

      <div className="button-menu">
        {!activeMenu && (
          <div className="flex items-center gap-3">
            <FiShoppingCart
              size={20}
              onClick={() => setActiveCart(true)}
              className="cursor-pointer"
            />

            <FiAlignJustify
              size={30}
              className="cursor-pointer"
              color="#454545"
              onClick={() => setActiveMenu(true)}
            />
          </div>
        )}
      </div>

      <div
        className="menu-cart"
        style={{ right: activeCart ? "40px" : "-500px" }}
      >
        <div className="flex items-center justify-between bg-[#fafafa] p-4 shadow-sm">
          <h2 className="text-xl">Tu carrito</h2>
          <FiX
            size={20}
            className="float-right cursor-pointer"
            onClick={() => setActiveCart(false)}
            color="#DDDDDD"
          />
        </div>
        <section className="mt-5">
          {carts.length ? (
            carts.map((product, index) => (
              <div className="flex gap-3 mt-4" key={index}>
                <img
                  src={product.imagen}
                  width={60}
                  height={50}
                  alt="imagen1"
                  className="rounded-md"
                />
                <div className="w-full">
                  <div className="flex justify-between items-cente">
                    <h2 className="font-bold block" style={poppinsBold.style}>
                      {product.name}
                    </h2>
                    <p className="float-right">$ {product.price}</p>
                  </div>
                  <p className="text-zinc-400">Cantidad: {product.quantity}</p>
                </div>
              </div>
            ))
          ) : (
            <section className="flex flex-col justify-center items-center my-28">
              <div className="no-cart">
                <FiShoppingCart size={30} color="#8c8c8c" />
              </div>
              <p className="text-[#686868]">No hay productos en el carrito</p>
            </section>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
