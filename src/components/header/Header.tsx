import Link from "next/link";
import "./Header.css";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <header className={"header"} style={inter.style}>
      <span>LOGO</span>
      <nav className="menu">
        <Link href={"/"}>Inicio</Link>
        <Link href={"/products"}>Productos</Link>
        <Link href={"/we"}>Nosotros</Link>
        <Link href={"/contact"}>Contacto</Link>
      </nav>
      <div className="cart">
        <FiShoppingCart size={20} />
        <FiUser size={20} />
      </div>
    </header>
  );
};

export default Header;
