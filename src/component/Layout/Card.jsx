import React from "react";
import { Box, Button, chakra, Image } from "@chakra-ui/react";

const Card = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Box w={"420px"} m={["0px", "35px"]} key={index}>
          <Image
            src={item.img}
            w={200}
            h={200}
            alt={"card_img"}
            ml={"80px"}
            mb={"25px"}
          />
          <chakra.p
            fontSize={["22px", "30px"]}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {item.caption}
          </chakra.p>
          <chakra.p textAlign={"center"} fontSize={["16px", "22px"]}>
            {item.content}
          </chakra.p>
        </Box>
      ))}
    </>
  );
};

export default Card;
