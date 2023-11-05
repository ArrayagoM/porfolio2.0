import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  
    try {
      const response = await axios.post('/user/login', formData);
      console.log(response);
      if (response.status === 200) {
        // Verificar si se recibió un objeto de usuario válido desde el servidor
        if (response.data && response.data.token) {
          // Almacenar el token en el LocalStorage
          
          localStorage.setItem('token', response.data.token);
          setMessage('Inicio de sesión exitoso');
  
          // Redirigir al usuario a la página de inicio o su panel de control
          navigate('/home'); // Reemplaza '/home' con la ruta a la que deseas redirigir
        } else {
          setMessage('Credenciales inválidas');
        }
      } else {
        setMessage('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setMessage('Credenciales inválidas');
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
          Iniciar Sesión
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
            Iniciar Sesión
          </Button>
        </form>
        {message && <Text mt={2}>{message}</Text>}
      </Box>
    </VStack>
  );
}

export default Login;
