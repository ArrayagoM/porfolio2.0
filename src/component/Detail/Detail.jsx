import React from "react";
import { Box, Container, Text, Heading, Image, Button, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const allProjects = useSelector((state) => state.allProyec);
  const project = allProjects.find((p) => p._id === id);

  if (!project) {
    return (
      <Container maxW="container.lg">
        <Text color="red" fontSize="18px" textAlign="center">
          No projects found with ID: {id}
        </Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" bg="white" borderRadius="10px" boxShadow="10px 10px 10px 10px rgba(0,0,0,0.2)" p="12px" mt="20px">
      <Heading fontSize="24px" color="teal" textAlign="center" mb="10px">
        {project.title}
      </Heading>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box w="40%" h="550px"  borderColor="black" margin="5px">
          <Image src={project.image} alt={project.title} w="100%" h="100%" objectFit="cover" />
        </Box>
        <Box w="58%" h="550px" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" margin="5px" >
          <Heading fontSize="24px" color="teal" textAlign="center">
            Description
          </Heading>
          <Text fontSize="18px" color="teal" textAlign="center" margin="5px">
            {project.description}
          </Text>
          <Box margin="10px" display="flex" justifyContent="center">
            <Button bg="#005780" border="none" padding="10px 20px" margin="0 10px" cursor="pointer" transition="background-color 0.3s ease">
              <Link to={project.url} color="white" textDecoration="none">
                View Project
              </Link>
            </Button>
            <Button bg="#005780" border="none" padding="10px 20px" margin="0 10px" cursor="pointer" transition="background-color 0.3s ease">
              <Link to={project.repositories} color="white" textDecoration="none">
                View Repository
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
