import {  GET_CONTAC,  GET_PROJEC } from "./action-type";
import axios from 'axios';

// Función para enviar una solicitud POST para agregar un proyecto
export const addProject = (dataProyec) => {
    return async () => {
      try {
        // Obtener el token del LocalStorage
        const token = localStorage.getItem('token');
  
        // Verificar si el token existe
        if (!token) {
          // Manejar el caso en el que el token no está disponible
          throw new Error('Token de autenticación no encontrado');
        }
  
        // Configurar los encabezados de la solicitud para incluir el token
        const headers = {
          Authorization: `Bearer ${token}`, // Agrega el token al encabezado 'Authorization'
        };
  
        // Realizar la solicitud POST con los encabezados configurados
        const response = await axios.post('/proyec', dataProyec, { headers });
  
        // Devolver la respuesta de la solicitud
        return response;
      } catch (error) {
        // Manejar errores aquí, como la falta de token
        console.error('Error al realizar la solicitud:', error);
        throw error; // Propaga el error para que se maneje en el código que llama a esta función
      }
    };
  };

export const getProjec = () => {
    return async (dispatch) => {
        const dataProjec =  (await axios('/proyec')).data;
        return dispatch({type: GET_PROJEC, payload: dataProjec});
    }
};

export const addContac = (dataContac) => {
    return async () => {
        await axios('contac',dataContac);
    }
}

export const getContac = () => {
    return async (dispatch) => {
        const ContacData = (await axios('/contac')).data;
        return dispatch({type: GET_CONTAC, payload: ContacData});
    }
}