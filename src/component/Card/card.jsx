import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";
import style from "./Card.module.css";

const Card = ({ id, title, image }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    const updateRotation = (evt) => {
      const { clientX, clientY } = evt;
      const { left, top, width, height } = el.getBoundingClientRect();

      const xRotation = ((clientY - top - height / 2) / height) * 20;
      const yRotation = ((clientX - left - width / 2) / width) * 20;

      const string = `
        perspective(250px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
      `;
      el.style.transform = string;
    };

    el.addEventListener("mousemove", updateRotation);

    el.addEventListener("mouseout", () => {
      el.style.transform = `
        perspective(250px)
        scale(1)
        rotateX(0)
        rotateY(0)
      `;
    });

    return () => {
      el.removeEventListener("mousemove", updateRotation);
      el.removeEventListener("mouseout", () => {});
    };
  }, []);

  return (
    <Box
      key={id}
      className={style.card}
      ref={cardRef}
    >
      <Box className={style.container}>
        <Link to={`/detail/${id}`}>
          <Image src={image} alt={title} className={style.img} />
          <Text className={style.title} fontSize="xl" fontWeight="bold" color="teal.500" mt={4}>
            {title}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
