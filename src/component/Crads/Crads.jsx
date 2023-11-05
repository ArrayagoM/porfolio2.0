import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { getProjec } from '../../redux/action';
import Card from '../Card/card';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';

function Cards() {
  const allProyec = useSelector((state) => state.allProyec);



  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {allProyec.map((e, index) => (
       <Card
       key={e._id || index}
       id={e._id}
       title={e.title}
       image={e.image}
       />
      ))}
    </Flex>
  );
}

export default Cards;
