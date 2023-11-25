import React from 'react';
import { HStack, Box } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const handleIconClick = (event) => {
    const icon = event.currentTarget;
    icon.classList.add('icon-shake');

    setTimeout(() => {
      icon.classList.add('icon-fade-out');

      setTimeout(() => {
        icon.classList.remove('icon-shake', 'icon-fade-out');
      }, 1000);
    }, 1000);
  };

  return (
    <div style={spacerStyle}>
      {' '}
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
              href="https://api.whatsapp.com/send/?phone=542241563807&text=Hello&type=phone_number&app_absent=0"
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
  height: '20px',
};

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

export default Footer;
