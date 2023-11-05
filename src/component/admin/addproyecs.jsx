import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, getProjec } from '../../redux/action';
import Cardproyec from '../Card/card';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Container,
  VStack,
  Heading
} from '@chakra-ui/react';
import axios from 'axios';
import Cards from '../Crads/Crads';

function Proyects() {
  const dispatch = useDispatch();
  const allProyec = useSelector((state) => state.allProyec);
  const [proyects, setProyects] = useState({
    title: '',
    url: '',
    image: '',
    repositories: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState('');

  const handleInputChange = (e) => {
    if (e.target.name === 'image') {
      setProyects({
        ...proyects,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProyects({
        ...proyects,
        [e.target.name]: e.target.value,
      });
    }
  };

  const uploadImage = async (e) => {

    if(e.target && e.target.files.length > 0){
      const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'portafolio');
     setLoading(true);
    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dmitoclts/upload',
        {
          method: "POST",
          body: data
        }
      );
      const file = await response.json();
      console.log(file.secure_url); // <--- acá tengo la url de la imagen subida en cloudinary
      setProyects((prevFormData) => ({
        ...prevFormData,
        image: file.secure_url || prevFormData.image //<--- y tengo que guardarla acá
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    }else {
      console.log("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setImageError('');

    if (!proyects.image) {
      setImageError('Please select an image');
      return;
    }

    try {
      dispatch(addProject({ ...proyects}));
      setProyects({
        title: '',
        url: '',
        image: null,
        repositories: '',
        description: '',
      });

      console.log(proyects);
    } catch (err) {
      console.error('Error uploading the image', err);
    }
  };

  useEffect(() => {
    dispatch(getProjec());
  }, []);

  return (
    <>
    <Container maxW="container.md" mt={5} p={4} border="1px solid black" borderRadius="md" boxShadow="lg" bg="gray.100" rounded="md"  w="50%">
    <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="center"> {/* Agrega la alineación vertical al centro */}
            <Heading as="h1">Create Project</Heading>

            <FormControl>
                <FormLabel color="gray.600">Title</FormLabel>
                <Input
                    type="text"
                    name="title"
                    value={proyects.title}
                    onChange={handleInputChange}
                    required
                    borderColor="gray.500"
                    focusBorderColor="blue.500"
                    size="sm" // Tamaño más pequeño
                    w="100%" // Ancho al 100% para respetar los bordes
                />
            </FormControl>

            <FormControl>
                <FormLabel color="gray.600">URL</FormLabel>
                <Input
                    type="text"
                    name="url"
                    value={proyects.url}
                    onChange={handleInputChange}
                    required
                    borderColor="gray.500"
                    focusBorderColor="blue.500"
                    size="sm" // Tamaño más pequeño
                    w="100%" // Ancho al 100% para respetar los bordes
                />
            </FormControl>

            <FormControl>
                <FormLabel color="gray.600">Image</FormLabel>
                <Input
                    id="image"
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={(e) => uploadImage(e)}
                    size="sm" // Tamaño más pequeño
                    w="100%" // Ancho al 100% para respetar los bordes
                    p={1}
                />
                <FormErrorMessage>{imageError}</FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel color="gray.600">Repository</FormLabel>
                <Input
                    type="text"
                    name="repositories"
                    value={proyects.repositories}
                    onChange={handleInputChange}
                    borderColor="gray.500"
                    focusBorderColor="blue.500"
                    size="sm" // Tamaño más pequeño
                    w="100%" // Ancho al 100% para respetar los bordes
                />
            </FormControl>

            <FormControl>
                <FormLabel color="gray.600">Description</FormLabel>
                <Textarea
                    rows={5}
                    name="description"
                    value={proyects.description}
                    onChange={handleInputChange}
                    required
                    borderColor="gray.500"
                    focusBorderColor="blue.500"
                    size="sm" // Tamaño más pequeño
                    w="100%" // Ancho al 100% para respetar los bordes
                />
            </FormControl>

            <Button variant="solid" colorScheme="blue" type="submit">
                Create
            </Button>
        </VStack>
    </form>
</Container>
<Cards/>
    </>

  );
}

export default Proyects;
