import type { ServiciosInterface } from "../../interfaces/serviciosinterface";

// Los componentes React siempre en PascalCase y con nombres claros.
const ServiciosArticle = ({ name, price, stock, img }: ServiciosInterface) => {
  return (
    <article className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
      <img
        src={img}
        alt={`Imagen de ${name}`}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Precio:</span> ${price}
      </p>
      
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
        Comprar
      </button>
    </article>
  );
};
export default ServiciosArticle;
// la interface no instacia al objeto, solo indica los tipos, cuando se crea el recorrido map
// es donde se les pasa las props para instaciar el objeto 


