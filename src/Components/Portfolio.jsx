/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Desarrollo web de Empresa de Repuestos de autos",
    description:
      "Un sitio web responsive y optimizado con SEO para poder llegar a más clientes y dar a conocer la marca.",
    url: "https://siguenzarepuestos.com.ar",
  },
  {
    title: "Desarrollo web de Alojamiento en la Patagonia",
    description:
      "Se desarrlló un sitio web para un alojamiento en la Patagonia Argentina, donde se obtenía la disponibilidad y las tarifas dinámicamente para tenerlas siempre actualizadas.",
    url: "https://ramayonhouse.com.ar",
  },
  {
    title: "Desarrollo web de Empresa de Distribución de Repuestos para Autos",
    description:
      "Se creó un sitio web para una empresa de distribución de repuestos para autos, se podía contactar a la empresa y conocer más acerca de ella.",
    url: "https://discor.com.ar",
  },
  {
    title: "Desarrollo web de Alojamiento en Córdoba, Nono",
    description:
      "Se creó un sitio web para un alojamiento en Córdoba, Nono, donde se podía ver los servicios, contactar al alojamiento y ver las fotos del lugar.",
    url: "https://https://latoscananono.com.ar/",
  },
  {
    title: "Desarrollo de una aplicación de Quiz de tecnología",
    description:
      "Se creó una aplicación de quiz de tecnología, donde se podía responder preguntas de tecnología y ver los resultados. (Se encuentra en inglés)",
    url: "https://inkinvissible.github.io/quiz_proyect/#",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portafolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
