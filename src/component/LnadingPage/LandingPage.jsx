import React from "react";
import {
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import profile from "../../img/perfil-PhotoRoom.png";
import { Link as RouterLink } from "react-router-dom";

const Landing = () => {
  const bgColor = useColorModeValue("teal.500", "teal.900");
  const textColor = useColorModeValue("gray.800", "white");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 1 } },
  };

  return (
    <Flex
      as="section"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient={`linear(to bottom, ${bgColor}, ${bgColor})`}
      color={textColor}
    >
      <Container maxW="container.lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Flex flex={1} justify="center">
              <Image
                src={profile}
                alt="Profile"
                w={{ base: "200px", md: "250px" }}
                borderRadius="full"
                boxShadow="lg"
              />
            </Flex>
            <Flex flex={1} direction="column" align="start" pl={{ md: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Heading size="2xl">Hi, I'm Juan Martin Arrayago</Heading>
                <Text fontSize="xl" mt={4}>
                  Web Developer Full Stack
                </Text>
                <Text mt={4}>
                  I'm a Full Stack Web Developer with a passion for learning
                  and taking on new challenges. I'm enthusiastic about growing
                  professionally and have a strong desire to create innovative
                  solutions using the latest technologies. I've worked on a few
                  projects and I love the ability to bring my ideas to life
                  through coding.
                </Text>
                <ChakraLink
                  as={RouterLink}
                  to="/home"
                  mt={4}
                  color={textColor}
                  fontWeight="bold"
                >
                  Let's Get Started
                </ChakraLink>
              </motion.div>
            </Flex>
          </Flex>
        </motion.div>
      </Container>
    </Flex>
  );
};

export default Landing;
