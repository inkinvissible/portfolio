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
import { Container, Row, Col, Card } from "react-bootstrap";

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
      <h2 className="text-center">Portafolio</h2>
      <Container className="pt-5">
        <Row>
          {projectList.map((project) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              xxl={3} // Modificado de xxl={4} a xxl={3} para mantener consistencia
              key={project.title}
              className="mb-4 d-flex"
            >
              <Card className="h-100 shadow-sm w-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto btn btn-primary"
                  >
                    Ver Proyecto
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
