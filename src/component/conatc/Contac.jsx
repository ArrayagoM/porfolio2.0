import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const handleIconClick = (event) => {
    const icon = event.currentTarget;

    // Aplicar efectos de temblor
    icon.classList.add("icon-shake");

    // Desvanecer el icono
    setTimeout(() => {
      icon.classList.add("icon-fade-out");

      // Restablecer los efectos después de un tiempo
      setTimeout(() => {
        icon.classList.remove("icon-shake", "icon-fade-out");
      }, 1000);
    }, 1000);
  };

  return (
    <div style={spacerStyle}> {/* Contenedor de espacio vertical */}
      <footer style={footerStyle}>
        <HStack spacing={8} align="center" justify="center" marginBottom="20px">
          <Box>
            <a
              href="mailto:Jarrayago@abc.gob.ar"
              target="_blank"
              onClick={handleIconClick}
              className="icon-link"
            >
              <FaEnvelope size={30} />
            </a>
          </Box>

          <Box>
            <a
              href="https://www.linkedin.com/in/juan-martin-arrayago/"
              target="_blank"
              onClick={handleIconClick}
              className="icon-link"
            >
              <FaLinkedin size={30} />
            </a>
          </Box>

          <Box>
            <a
              href="https://github.com/ArrayagoM"
              target="_blank"
              onClick={handleIconClick}
              className="icon-link"
            >
              <FaGithub size={30} />
            </a>
          </Box>

          <Box>
            <a
              href="https://wa.me/542241563807&text=Hello!"
              target="_blank"
              onClick={handleIconClick}
              className="icon-link"
            >
              <FaWhatsapp size={30} />
            </a>
          </Box>
        </HStack>
      </footer>
    </div>
  );
};

const spacerStyle = {
  height: "20px", // Espacio vertical de 20px
};

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};

export default Contact;
