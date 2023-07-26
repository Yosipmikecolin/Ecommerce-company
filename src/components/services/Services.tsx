import { Poppins } from "next/font/google";
import "./Services.css";
import { FiCloud, FiPackage, FiTruck } from "react-icons/fi";
const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const Services = () => {
  return (
    <section className="services">
      <div>
        <div className="bg-indigo-600 p-3 w-10 text-white rounded-full">
          <FiCloud />
        </div>
        <div style={poppins.style}>
          <h2 className="text-indigo-500">100% Algodon</h2>
        </div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          fugit, consectetur, autem dolore inventore enim illo quidem illum
          eaque dolorum quas itaque harum voluptate commodi ut culpa laboriosam
          eos ipsa.
        </p>
      </div>
      <div>
        <div className="bg-indigo-600 p-3 w-10 text-white rounded-full">
          <FiTruck />
        </div>
        <div style={poppins.style}>
          <h2 className="text-indigo-500">Pagos contra entrega</h2>
        </div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          fugit, consectetur, autem dolore inventore enim illo quidem illum
          eaque dolorum quas itaque harum voluptate commodi ut culpa laboriosam
          eos ipsa.
        </p>
      </div>

      <div>
        <div className="bg-indigo-600 p-3 w-10 text-white rounded-full">
          <FiPackage />
        </div>
        <div style={poppins.style}>
          <h2 className="text-indigo-500">Productos organicos</h2>
        </div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          fugit, consectetur, autem dolore inventore enim illo quidem illum
          eaque dolorum quas itaque harum voluptate commodi ut culpa laboriosam
          eos ipsa.
        </p>
      </div>
    </section>
  );
};

export default Services;
