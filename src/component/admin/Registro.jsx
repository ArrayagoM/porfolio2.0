import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'; // Asegúrate de importar los componentes de Chakra UI que necesitas

function Register() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user', formData);
      console.log('Registration Response:', response.data);

      if (response.data.token) {
        // Almacena el token en el LocalStorage
      localStorage.setItem('token', response.data.token);
        setMessage('Registro exitoso');
        // Redirecciona al usuario a la página de inicio (por ejemplo, 'home')
        navigate('/home');
      } else {
        setMessage('Error en el registro');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      setMessage('Error en el registro');
    }
  };

  return (
    <VStack spacing={4} align="center">
      <Box
        p={4}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        w="300px"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          Registro
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Contraseña:</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            mt={4}
            w="100%"
            variant="solid"
          >
            Registrar
          </Button>
        </form>
        {message && <Text mt={2}>{message}</Text>}
      </Box>
    </VStack>
  );
}

export default Register;
