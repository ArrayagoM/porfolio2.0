import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import CV from "../CV/Juna Martin arrayago Español_3.pdf";

function NavBarExample() {
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = useColorModeValue('#1a202c', '#1a202c');
  const color = useColorModeValue('white', 'white');

  const onClose = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Flex
     padding={'12px'}
     margin={'10px'}
        as="nav"
        bg={bgColor}
        color={color}
        py={4}
        boxShadow="md"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top={0}
        width="50%"
        left="25%"
        zIndex="999"
        borderRadius={'12px'}
      >
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Link as={RouterLink} to={'/'} fontSize="xl" fontWeight="bold">
                Martin Arrayago
              </Link>
            </Flex>
            <Box
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
            >
              <Link as={RouterLink} to={'/home'} mr={4}>
                Home
              </Link>
              <Link href={CV} target="_blank" color="teal.500" mr={4}>
                Download CV
              </Link>
              <Link as={RouterLink} to={'/about'} mr={4}>
                About
              </Link>
            </Box>
            <IconButton
              display={{ base: 'block', md: 'none' }}
              icon={<HamburgerIcon />}
              aria-label="Toggle navigation"
              variant="ghost"
              color="current"
              onClick={toggleMenu}
            />
          </Flex>
        </Container>
      </Flex>

      <Box mt={20}> {/* Agregar margen inferior para evitar que el contenido se oculte detrás del navbar */}
        {/* Tu contenido aquí */}
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Martin Arrayago</DrawerHeader>
            <DrawerBody>
              <Link as={RouterLink} to={'/home'} onClick={onClose} mb={4} display="block">
                Home
              </Link>
              <Link target="_blank" href={CV} onClick={onClose} mb={4} display="block">
                Download CV
              </Link>
              <Link as={RouterLink} to={'/about'} onClick={onClose} mb={4} display="block">
                About
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default NavBarExample;
